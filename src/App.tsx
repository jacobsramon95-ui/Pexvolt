import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './lib/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Gallery } from './components/Gallery';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen">
    <Navbar />
    <main>{children}</main>
    <Footer />
    <WhatsAppButton />
  </div>
);

const Home = () => (
  <>
    <div id="home"><Hero /></div>
    <div id="services"><Services /></div>
    <div id="why"><WhyUs /></div>
    <div id="gallery"><Gallery /></div>
    <div id="team"><Team /></div>
    <div id="contact"><Contact /></div>
  </>
);

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-we-do" element={<Services />} />
            <Route path="/why-choose-us" element={<WhyUs />} />
            <Route path="/our-portfolio" element={<Gallery />} />
            <Route path="/the-people-behind-pexvolt" element={<Team />} />
            <Route path="/get-in-touch" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}
