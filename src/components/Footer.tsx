import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { Youtube, Instagram, Mail, Image } from 'lucide-react';
import logo from '../assets/logo2.png';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#020810] border-t-2 border-brand-red py-10 px-[6%]">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <div className="flex items-center gap-3.5">
          <img 
            src={logo} 
            alt="Pexvolt Logo" 
            className="w-[48px] h-[48px] object-contain mix-blend-multiply"
          />
          <div>
            <div className="font-display font-black text-lg tracking-widest uppercase text-brand-red">
              Pexvolt Engineering
            </div>
            <div className="text-[11px] text-brand-gray tracking-wider">Thika, Kiambu County, Kenya</div>
          </div>
        </div>
        
        <div className="text-[13px] text-brand-gray">
          {t('© 2024 Pexvolt Engineering. All rights reserved.', '© 2024 Pexvolt Engineering. Haki zote zimehifadhiwa.')}
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
