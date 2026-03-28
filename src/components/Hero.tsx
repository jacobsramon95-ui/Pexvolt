import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';
import logo from '../assets/logo2.png';

export const Hero = () => {
  const { t } = useLanguage();

  const stats = [
    { n: '5+', en: 'Core Services', sw: 'Huduma Kuu' },
    { n: '100%', en: 'Certified Work', sw: 'Kazi Iliyoidhinishwa' },
    { n: '24/7', en: 'Emergency Support', sw: 'Msaada wa Dharura' },
    { n: '272', en: 'YouTube Subs', sw: 'Wafuasi YouTube' },
  ];

  return (
    <section className="relative min-h-screen flex items-center px-[6%] pt-28 pb-20 overflow-hidden bg-navy" id="home">
      <div className="absolute inset-0 circuit-bg pointer-events-none"></div>
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-0 w-[600px] h-[600px] bg-navy-lighter/80 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-br from-transparent via-transparent to-brand-red/5 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-brand-red to-transparent"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-2 h-2 bg-brand-red rounded-full animate-blink-dot shrink-0"></div>
            <span className="text-[11px] font-bold tracking-[3px] uppercase text-brand-red">
              {t('Thika, Kenya — Est. 2024', 'Thika, Kenya — Ilianzishwa 2024')}
            </span>
          </div>
          
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] uppercase tracking-tight mb-7">
            <span className="block">{t('Powering', 'Kuleta Nguvu')}</span>
            <span className="text-brand-red block">{t('Your World', 'Ulimwengu Wako')}</span>
          </h1>

          <p className="text-lg text-brand-light leading-relaxed max-w-[500px] mb-2">
            {t(
              'Professional electrical engineering solutions for homes, businesses and industries across Thika and Nairobi.',
              'Suluhisho za uhandisi wa umeme kwa nyumba, biashara na viwanda kote Thika na Nairobi.'
            )}
          </p>
          <p className="text-sm text-brand-gray italic mb-11">
            {t('Reliable. Professional. On time.', 'Kuaminika. Kitaalamu. Kwa wakati.')}
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a href="#contact" className="bg-brand-red text-white px-9 py-4 font-display text-base font-bold tracking-widest uppercase no-underline transition-colors hover:bg-brand-red-hover border-2 border-brand-red">
              {t('Request a Quote', 'Omba Bei')}
            </a>
            <a href="#services" className="border-2 border-white/25 text-white px-8 py-4 font-display text-base font-bold tracking-widest uppercase no-underline transition-all hover:border-white">
              {t('Our Services', 'Huduma Zetu')}
            </a>
          </div>

          <div className="flex flex-wrap border-t border-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="pt-5 pr-9 mr-9 border-r border-white/10 last:border-r-0 last:mr-0 last:pr-0">
                <div className="font-display text-4xl font-black text-brand-red leading-none">{stat.n}</div>
                <div className="text-[10px] text-brand-gray tracking-widest uppercase mt-1">{t(stat.en, stat.sw)}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="hidden lg:block relative shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img 
            src={logo} 
            alt="Pexvolt Logo" 
            className="w-[280px] h-[280px] object-contain shadow-[0_0_80px_rgba(204,26,26,0.3)] animate-logo-float"
          />
          <div className="absolute -inset-4 border-2 border-brand-red/30 rounded-2xl -z-10 animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  );
};
