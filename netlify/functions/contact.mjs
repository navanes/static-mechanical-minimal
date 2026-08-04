const RESEND_API_URL = 'https://api.resend.com/emails';

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const formatText = ({ name, phone, email, service, message }) => `New Static Mechanical website request

Name: ${name}
Phone: ${phone}
Email: ${email || 'Not provided'}
Service: ${service || 'Not selected'}

Message:
${message || 'No message provided'}
`;

const formatHtml = (data) => `
  <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5">
    <h2 style="margin:0 0 16px">New Static Mechanical website request</h2>
    <table style="border-collapse:collapse;width:100%;max-width:640px">
      <tr><td style="padding:8px 0;color:#6b7280">Name</td><td style="padding:8px 0;font-weight:700">${escapeHtml(data.name)}</td></tr>
      <tr><td style="padding:8px 0;color:#6b7280">Phone</td><td style="padding:8px 0;font-weight:700"><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></td></tr>
      <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0">${data.email ? `<a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a>` : 'Not provided'}</td></tr>
      <tr><td style="padding:8px 0;color:#6b7280">Service</td><td style="padding:8px 0">${escapeHtml(data.service || 'Not selected')}</td></tr>
    </table>
    <h3 style="margin:24px 0 8px">Message</h3>
    <p style="white-space:pre-wrap;margin:0">${escapeHtml(data.message || 'No message provided')}</p>
  </div>
`;

const uniqueRecipients = (emails) => [...new Set(emails.filter(Boolean))];

async function sendEmail(data) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.REPORT_FROM_EMAIL || 'Static Mechanical <onboarding@resend.dev>';
  const to = process.env.CONTACT_TO_EMAIL || process.env.REPORT_TO_EMAIL || 'mr.narek.avanesian@gmail.com';
  const extraRecipients = [
    process.env.CONTACT_COPY_EMAIL,
    process.env.CONTACT_CC_EMAIL,
  ]
    .filter(Boolean)
    .join(',')
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean);

  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured.');
  }

  for (const recipient of uniqueRecipients([to, ...extraRecipients])) {
    const res = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: data.email || undefined,
        subject: `New HVAC request from ${data.name}`,
        text: formatText(data),
        html: formatHtml(data),
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Resend failed: ${body}`);
    }
  }
}

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const name = String(data.name || '').trim();
    const phone = String(data.phone || '').trim();

    if (!name || !phone) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Name and phone are required.' }) };
    }

    await sendEmail({
      name,
      phone,
      email: String(data.email || '').trim(),
      service: String(data.service || '').trim(),
      message: String(data.message || '').trim(),
    });

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: JSON.stringify({ error: 'Unable to send request. Please call us directly.' }) };
  }
}
