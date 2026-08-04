import { createSign } from 'node:crypto';

const RESEND_API_URL = 'https://api.resend.com/emails';
const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GA_SCOPE = 'https://www.googleapis.com/auth/analytics.readonly';
const LOS_ANGELES_TZ = 'America/Los_Angeles';

export const config = {
  // Netlify schedules use UTC. 06:30 UTC is 10:30 PM during daylight saving time.
  // The function also checks Los Angeles local time before sending.
  schedule: '30 6 * * *',
};

const b64url = (input) =>
  Buffer.from(input)
    .toString('base64')
    .replaceAll('+', '-')
    .replaceAll('/', '_')
    .replaceAll('=', '');

const laParts = (date = new Date()) => {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: LOS_ANGELES_TZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(date);

  return Object.fromEntries(parts.map((part) => [part.type, part.value]));
};

const laDateString = (date = new Date()) => {
  const parts = laParts(date);
  return `${parts.year}-${parts.month}-${parts.day}`;
};

const readableDate = (dateString) => {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Intl.DateTimeFormat('en-US', {
    timeZone: LOS_ANGELES_TZ,
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(Date.UTC(year, month - 1, day, 12)));
};

async function getAccessToken() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replaceAll('\\n', '\n');

  if (!clientEmail || !privateKey) {
    throw new Error('Google service account credentials are not configured.');
  }

  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claim = b64url(JSON.stringify({
    iss: clientEmail,
    scope: GA_SCOPE,
    aud: TOKEN_URL,
    iat: now,
    exp: now + 3600,
  }));
  const unsignedJwt = `${header}.${claim}`;
  const signature = createSign('RSA-SHA256').update(unsignedJwt).sign(privateKey);
  const jwt = `${unsignedJwt}.${b64url(signature)}`;

  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  if (!res.ok) {
    throw new Error(`Google token request failed: ${await res.text()}`);
  }

  const data = await res.json();
  return data.access_token;
}

async function runReport(accessToken, body) {
  const propertyId = process.env.GA4_PROPERTY_ID;
  if (!propertyId) throw new Error('GA4_PROPERTY_ID is not configured.');

  const res = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`GA4 report failed: ${await res.text()}`);
  }

  return res.json();
}

const metricValue = (report, metricName) => {
  const index = report.metricHeaders?.findIndex((header) => header.name === metricName) ?? -1;
  if (index < 0) return 0;
  return Number(report.rows?.[0]?.metricValues?.[index]?.value || 0);
};

async function loadReport(date) {
  const accessToken = await getAccessToken();
  const dateRanges = [{ startDate: date, endDate: date }];

  const totals = await runReport(accessToken, {
    dateRanges,
    metrics: [{ name: 'activeUsers' }, { name: 'screenPageViews' }, { name: 'eventCount' }],
  });

  const pages = await runReport(accessToken, {
    dateRanges,
    dimensions: [{ name: 'pagePath' }],
    metrics: [{ name: 'screenPageViews' }],
    orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
    limit: 6,
  });

  const events = await runReport(accessToken, {
    dateRanges,
    dimensions: [{ name: 'eventName' }],
    metrics: [{ name: 'eventCount' }],
    dimensionFilter: {
      filter: {
        fieldName: 'eventName',
        inListFilter: {
          values: ['click_to_call', 'click_instagram_link', 'click_yelp_link', 'click_to_email', 'generate_lead'],
        },
      },
    },
  });

  const eventCounts = Object.fromEntries(
    (events.rows || []).map((row) => [
      row.dimensionValues[0].value,
      Number(row.metricValues[0].value || 0),
    ]),
  );

  return {
    activeUsers: metricValue(totals, 'activeUsers'),
    pageViews: metricValue(totals, 'screenPageViews'),
    topPages: (pages.rows || []).map((row) => ({
      path: row.dimensionValues[0].value,
      views: Number(row.metricValues[0].value || 0),
    })),
    events: eventCounts,
  };
}

const textReport = (date, report) => `Static Mechanical Daily Website Report
Date: ${readableDate(date)}

Traffic
- Total visitors: ${report.activeUsers}
- Page views: ${report.pageViews}

Top Pages
${report.topPages.length ? report.topPages.map((page) => `- ${page.path}: ${page.views} views`).join('\n') : '- No page views recorded'}

Actions
- Phone clicks: ${report.events.click_to_call || 0}
- Instagram clicks: ${report.events.click_instagram_link || 0}
- Yelp clicks: ${report.events.click_yelp_link || 0}
- Email clicks: ${report.events.click_to_email || 0}
- Quote/contact form submissions: ${report.events.generate_lead || 0}
`;

const htmlReport = (date, report) => `
  <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5">
    <h2 style="margin:0 0 6px">Static Mechanical Daily Website Report</h2>
    <p style="margin:0 0 20px;color:#6b7280">${readableDate(date)}</p>
    <h3>Traffic</h3>
    <ul>
      <li>Total visitors: <strong>${report.activeUsers}</strong></li>
      <li>Page views: <strong>${report.pageViews}</strong></li>
    </ul>
    <h3>Top Pages</h3>
    <ul>
      ${report.topPages.length ? report.topPages.map((page) => `<li>${page.path}: <strong>${page.views}</strong> views</li>`).join('') : '<li>No page views recorded</li>'}
    </ul>
    <h3>Actions</h3>
    <ul>
      <li>Phone clicks: <strong>${report.events.click_to_call || 0}</strong></li>
      <li>Instagram clicks: <strong>${report.events.click_instagram_link || 0}</strong></li>
      <li>Yelp clicks: <strong>${report.events.click_yelp_link || 0}</strong></li>
      <li>Email clicks: <strong>${report.events.click_to_email || 0}</strong></li>
      <li>Quote/contact form submissions: <strong>${report.events.generate_lead || 0}</strong></li>
    </ul>
  </div>
`;

async function sendReport(date, report) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.REPORT_FROM_EMAIL || 'Static Mechanical <onboarding@resend.dev>';
  const to = process.env.REPORT_TO_EMAIL || 'mr.narek.avanesian@gmail.com';

  if (!apiKey) throw new Error('RESEND_API_KEY is not configured.');

  const res = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Static Mechanical Daily Website Report - ${readableDate(date)}`,
      text: textReport(date, report),
      html: htmlReport(date, report),
    }),
  });

  if (!res.ok) {
    throw new Error(`Resend failed: ${await res.text()}`);
  }
}

export async function handler(event) {
  try {
    const parts = laParts();
    const manualRun = event.queryStringParameters?.run === '1';

    if (!manualRun && `${parts.hour}:${parts.minute}` !== '22:30') {
      return { statusCode: 200, body: JSON.stringify({ skipped: true, localTime: `${parts.hour}:${parts.minute}` }) };
    }

    const date = event.queryStringParameters?.date || laDateString();
    const report = await loadReport(date);
    await sendReport(date, report);

    return { statusCode: 200, body: JSON.stringify({ ok: true, date, report }) };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
}
