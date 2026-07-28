import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollManager from './components/ScrollManager';
import Analytics from './components/Analytics';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import WhyChooseUs from './pages/WhyChooseUs';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './index.css';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollManager />
        <Analytics />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
