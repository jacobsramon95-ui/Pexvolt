import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
import { SEO } from './components/SEO';

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
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={
                <>
                  <SEO 
                    title="Pexvolt Engineering – Electrician in Thika, Kenya"
                    description="Pexvolt Engineering provides professional electrical engineering services in Thika and Kenya. From installations to solar energy and CCTV – fast, reliable, 24/7."
                    canonical="https://pexvolt.co.ke/"
                  />
                  <Home />
                </>
              } />
              <Route path="/what-we-do" element={
                <>
                  <SEO 
                    title="What We Do – Professional Electrical Services | Pexvolt Engineering"
                    description="Discover Pexvolt Engineering's services in Thika: from domestic installations and industrial wiring to solar energy and security systems."
                    canonical="https://pexvolt.co.ke/what-we-do"
                  />
                  <Services isPage />
                </>
              } />
              <Route path="/why-choose-us" element={
                <>
                  <SEO 
                    title="Why Choose Us – Reliable Electricians in Thika | Pexvolt Engineering"
                    description="Why Pexvolt Engineering? We offer 24/7 service, certified technicians, and years of experience in electrical engineering throughout Kenya."
                    canonical="https://pexvolt.co.ke/why-choose-us"
                  />
                  <WhyUs isPage />
                </>
              } />
              <Route path="/our-portfolio" element={
                <>
                  <SEO 
                    title="Our Portfolio – Recent Electrical Projects | Pexvolt Engineering"
                    description="View our completed projects. From solar panel installations to complex industrial projects in Thika and surrounding areas."
                    canonical="https://pexvolt.co.ke/our-portfolio"
                  />
                  <Gallery isPage />
                </>
              } />
              <Route path="/the-people-behind-pexvolt" element={
                <>
                  <SEO 
                    title="Our Team – Expert Engineers at Pexvolt Engineering"
                    description="Meet the team behind Pexvolt Engineering. Our experts are ready for all your electrical challenges in Thika."
                    canonical="https://pexvolt.co.ke/the-people-behind-pexvolt"
                  />
                  <Team isPage />
                </>
              } />
              <Route path="/get-in-touch" element={
                <>
                  <SEO 
                    title="Contact Us – Get a Quote Today | Pexvolt Engineering"
                    description="Contact Pexvolt Engineering for a free quote or emergency assistance with power outages in Thika and Kenya."
                    canonical="https://pexvolt.co.ke/get-in-touch"
                  />
                  <Contact isPage />
                </>
              } />
            </Routes>
          </Layout>
        </BrowserRouter>
      </HelmetProvider>
    </LanguageProvider>
  );
}
