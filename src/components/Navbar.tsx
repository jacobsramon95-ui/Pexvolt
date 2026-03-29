import React, { useState, useEffect } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { Menu, X } from 'lucide-react';
import logoImg from '/images/logo.jpg';

export const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', en: 'Services', sw: 'Huduma' },
    { href: '#why', en: 'About Us', sw: 'Kuhusu Sisi' },
    { href: '#team', en: 'Our Team', sw: 'Timu Yetu' },
    { href: '#contact', en: 'Contact', sw: 'Wasiliana' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-[6%] border-b-2 border-brand-red ${
        isScrolled ? 'bg-navy/95 backdrop-blur-sm' : 'bg-navy'
      }`}
    >
      <div className="flex items-center justify-between h-[72px] gap-6">
        <a href="#home" className="flex items-center gap-3 no-underline shrink-0">
          <img 
            src={logoImg} 
            alt="Pexvolt Logo" 
            className="w-auto h-[60px] object-contain"
          />
          <div className="flex flex-col leading-[1.1]">
            <span className="font-display font-black text-[21px] tracking-[3px] uppercase">
              <span className="text-brand-red">Pex</span>
              <span className="text-brand-red">volt</span>
            </span>
            <span className="text-[9px] tracking-[3px] text-brand-gray uppercase font-semibold">Engineering</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href}
                className="text-brand-light no-underline text-[12px] font-semibold tracking-[2px] uppercase transition-colors hover:text-brand-red border-b border-transparent hover:border-brand-red pb-0.5"
              >
                {t(link.en, link.sw)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 shrink-0">
          <div className="flex border border-white/15 overflow-hidden rounded-sm">
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
          <a 
            href="#contact" 
            className="hidden sm:block bg-brand-red text-white px-6 py-2.5 text-[12px] font-bold tracking-[1.5px] uppercase no-underline transition-colors hover:bg-brand-red-hover font-display whitespace-nowrap"
          >
            {t('Get a Quote', 'Omba Bei')}
          </a>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-navy-light border-t border-white/10 py-6 px-[6%] absolute top-[72px] left-0 right-0 shadow-2xl">
          <ul className="flex flex-col gap-4 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-brand-light text-sm font-semibold tracking-widest uppercase py-2"
                >
                  {t(link.en, link.sw)}
                </a>
              </li>
            ))}
            <li>
              <a 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-brand-red text-white text-center py-3 rounded font-bold uppercase tracking-widest mt-2"
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
