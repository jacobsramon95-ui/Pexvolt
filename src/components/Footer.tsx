import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { Youtube, Instagram, Mail, Image } from 'lucide-react';
const logoImg = '/logo-full.png';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#020810] border-t-2 border-brand-red py-10 px-[6%]">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <div className="hidden lg:flex items-center gap-3.5">
          <img 
            src={logoImg} 
            alt="Pexvolt Logo" 
            className="h-[80px] w-auto object-contain"
          />
        </div>
        
        <div className="text-[13px] text-brand-gray flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span>{t('© 2026 Pexvolt Engineering. All rights reserved.', '© 2026 Pexvolt Engineering. Haki zote zimehifadhiwa.')}</span>
          <a href="/privacy.html" className="hover:text-white transition-colors underline sm:no-underline sm:hover:underline">Privacy Policy</a>
        </div>

        <div className="flex gap-2.5">
          <a href="https://www.youtube.com/channel/UC0bmLxy3JwBd_qzwWZOHrZg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-brand-gray transition-all hover:bg-brand-red/20 hover:border-brand-red hover:text-white">
            <Youtube size={18} />
          </a>
          <a href="https://www.instagram.com/pexvolt" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-brand-gray transition-all hover:bg-brand-red/20 hover:border-brand-red hover:text-white">
            <Instagram size={18} />
          </a>
          <a href="https://drive.google.com/drive/folders/1tWuf4NE7CeLu7UdpoKB_ArK2cXJ_RhVY" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-brand-gray transition-all hover:bg-brand-red/20 hover:border-brand-red hover:text-white" title={t('Photo Gallery', 'Picha za Miradi')}>
            <Image size={18} />
          </a>
          <a href="mailto:pexvoltengineering@gmail.com" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-brand-gray transition-all hover:bg-brand-red/20 hover:border-brand-red hover:text-white">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};
