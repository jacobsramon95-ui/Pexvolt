import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/images/logo.jpg';

export const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#services', en: 'Services', sw: 'Huduma' },
    { href: '/#why', en: 'About Us', sw: 'Kuhusu Sisi' },
    { href: '/#team', en: 'Our Team', sw: 'Timu Yetu' },
    { href: '/#contact', en: 'Contact', sw: 'Wasiliana' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#') && location.pathname === '/') {
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-[6%] border-b-2 border-brand-red ${
        isScrolled ? 'bg-navy/95 backdrop-blur-sm' : 'bg-navy'
      }`}
    >
      <div className="flex items-center justify-between h-[72px] gap-6">
        <Link 
          to="/" 
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-2 sm:gap-3 no-underline shrink-0"
        >
          <img 
            src={logoImg} 
            alt="Pexvolt Logo" 
            className="w-auto h-[48px] sm:h-[60px] object-contain"
            decoding="async"
            fetchPriority="high"
          />
          <div className="hidden xs:flex flex-col leading-[1.1]">
            <span className="font-display font-black text-[18px] sm:text-[21px] tracking-[2px] sm:tracking-[3px] uppercase">
              <span className="text-brand-red">Pex</span>
              <span className="text-brand-red">volt</span>
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[2px] sm:tracking-[3px] text-brand-gray uppercase font-semibold">Engineering</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.href.startsWith('/#') ? (
                <a 
                  href={link.href}
                  onClick={(e) => {
                    if (location.pathname === '/') {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }
                  }}
                  className="text-brand-light no-underline text-[12px] font-semibold tracking-[2px] uppercase transition-colors hover:text-brand-red border-b border-transparent hover:border-brand-red pb-0.5"
                >
                  {t(link.en, link.sw)}
                </a>
              ) : (
                <Link 
                  to={link.href}
                  className="text-brand-light no-underline text-[12px] font-semibold tracking-[2px] uppercase transition-colors hover:text-brand-red border-b border-transparent hover:border-brand-red pb-0.5"
                >
                  {t(link.en, link.sw)}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 shrink-0">
          {/* Language Toggle - Desktop Only */}
          <div className="hidden md:flex border border-white/15 overflow-hidden rounded-sm">
            <button 
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 text-[11px] font-bold tracking-wider cursor-pointer transition-all uppercase ${lang === 'en' ? 'bg-brand-red text-white' : 'text-brand-gray hover:text-white'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('sw')}
              className={`px-3 py-1.5 text-[11px] font-bold tracking-wider cursor-pointer transition-all uppercase ${lang === 'sw' ? 'bg-brand-red text-white' : 'text-brand-gray hover:text-white'}`}
            >
              SW
            </button>
          </div>
          
          {/* CTA - Desktop Only */}
          <a 
            href="/#contact" 
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                handleNavClick('/#contact');
              }
            }}
            className="hidden md:block bg-brand-red text-white px-6 py-2.5 text-[12px] font-bold tracking-[1.5px] uppercase no-underline transition-colors hover:bg-brand-red-hover font-display whitespace-nowrap"
          >
            {t('Get a Quote', 'Omba Bei')}
          </a>

          {/* Hamburger - Mobile Only */}
          <button 
            className="md:hidden text-white p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-navy-light border-t border-white/10 py-8 px-[6%] absolute top-[72px] left-0 right-0 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <ul className="flex flex-col gap-6 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.href.startsWith('/#') ? (
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      if (location.pathname === '/') {
                        e.preventDefault();
                        handleNavClick(link.href);
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className="block text-brand-light text-base font-bold tracking-widest uppercase py-2 border-b border-white/5"
                  >
                    {t(link.en, link.sw)}
                  </a>
                ) : (
                  <Link 
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-brand-light text-base font-bold tracking-widest uppercase py-2 border-b border-white/5"
                  >
                    {t(link.en, link.sw)}
                  </Link>
                )}
              </li>
            ))}
            
            {/* Mobile Language Toggle */}
            <li className="flex gap-4 mt-4">
              <button 
                onClick={() => setLang('en')}
                className={`flex-1 py-3 text-xs font-bold tracking-widest uppercase border ${lang === 'en' ? 'bg-brand-red border-brand-red text-white' : 'border-white/20 text-brand-gray'}`}
              >
                English
              </button>
              <button 
                onClick={() => setLang('sw')}
                className={`flex-1 py-3 text-xs font-bold tracking-widest uppercase border ${lang === 'sw' ? 'bg-brand-red border-brand-red text-white' : 'border-white/20 text-brand-gray'}`}
              >
                Swahili
              </button>
            </li>

            <li>
              <a 
                href="/#contact"
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    handleNavClick('/#contact');
                  } else {
                    setIsMobileMenuOpen(false);
                  }
                }}
                className="block bg-brand-red text-white text-center py-4 font-display font-black uppercase tracking-[2px] mt-2"
              >
                {t('Get a Quote', 'Omba Bei')}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
