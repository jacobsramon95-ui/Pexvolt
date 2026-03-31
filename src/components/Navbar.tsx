import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';
import { Menu, X } from 'lucide-react';

const logoImg = '/logo-full.png';

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
                                                      className="h-[52px] sm:h-[64px] w-auto object-contain"
                                                      decoding="async"
                                                      fetchPriority="high"
                                                    />
                                      <div className="flex flex-col leading-[1.1] w-fit">
                                                  <div className="flex justify-between w-full text-brand-red font-display font-black text-[16px] xs:text-[19px] sm:text-[22px] uppercase leading-none">
                                                      {'PEXVOLT'.split('').map((c, i) => (
                                                            <span key={i}>{c}</span>span>
                                                          ))}
                                                  </div>div>
                                                  <span className="text-[#8fa8c8] font-display font-semibold text-[8px] xs:text-[9px] sm:text-[11px] tracking-[3px] sm:tracking-[4px] uppercase mt-[3px] block">ENGINEERING</span>span>
                                      </div>div>
                            </Link>Link>
                    
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
                                                          </a>a>
                                                        ) : (
                                                          <Link
                                                                                to={link.href}
                                                                                className="text-brand-light no-underline text-[12px] font-semibold tracking-[2px] uppercase transition-colors hover:text-brand-red border-b border-transparent hover:border-brand-red pb-0.5"
                                                                              >
                                                              {t(link.en, link.sw)}
                                                          </Link>Link>
                                                    )}
                                      </li>li>
                                    ))}
                            </ul>ul>
                    
                            <div className="flex items-center gap-3 shrink-0">
                                {/* Language Toggle - Desktop Only */}
                                      <div className="hidden md:flex border border-white/15 overflow-hidden rounded-sm">
                                                  <button
                                                                    onClick={() => setLang('en')}
                                                                    className={`px-3 py-1.5 text-[11px] font-bold tracking-wider cursor-pointer transition-all uppercase ${lang === 'en' ? 'bg-brand-red text-white' : 'text-brand-gray hover:text-white'}`}
                                                                  >
                                                                EN
                                                  </button>button>
                                                  <button
                                                                    onClick={() => setLang('sw')}
                                                                    className={`px-3 py-1.5 text-[11px] font-bold tracking-wider cursor-pointer transition-all uppercase ${lang === 'sw' ? 'bg-brand-red text-white' : 'text-brand-gray hover:text-white'}`}
                                                                  >
                                                                SW
                                                  </button>button>
                                      </div>div>
                            
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
                                      </a>a>
                            
                                {/* Mobile: Language Toggle + CTA */}
                                      <div className="flex md:hidden items-center gap-2">
                                                  <div className="flex border border-white/15 overflow-hidden rounded-sm">
                                                                <button
                                                                                    onClick={() => setLang('en')}
                                                                                    className={`px-2.5 py-1.5 text-[11px] font-bold tracking-wider cursor-pointer transition-all uppercase ${lang === 'en' ? 'bg-brand-red text-white' : 'text-brand-gray hover:text-white'}`}
                                                                                  >
                                                                                EN
                                                                </button>button>
                                                                <button
                                                                                    onClick={() => setLang('sw')}
                                                                                    className={`px-2.5 py-1.5 text-[11px] font-bold tracking-wider cursor-pointer transition-all uppercase ${lang === 'sw' ? 'bg-brand-red text-white' : 'text-brand-gray hover:text-white'}`}
                                                                                  >
                                                                                SW
                                                                </button>button>
                                                  </div>div>
                                                  <a
                                                                    href="/#contact"
                                                                    onClick={(e) => {
                                                                                        if (location.pathname === '/') {
                                                                                                              e.preventDefault();
                                                                                                              handleNavClick('/#contact');
                                                                                            }
                                                                    }}
                                                                    className="bg-brand-red text-white px-3 py-2 text-[10px] font-bold tracking-[1px] uppercase no-underline transition-colors hover:bg-brand-red-hover font-display whitespace-nowrap"
                                                                  >
                                                      {t('Get a Quote', 'Omba Bei')}
                                                  </a>a>
                                      </div>div>
                            </div>div>
                    </div>div>
              </nav>nav>
            );
};</nav>
