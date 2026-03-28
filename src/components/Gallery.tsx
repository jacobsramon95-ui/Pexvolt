import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';
import { ExternalLink, Camera } from 'lucide-react';
import industrialProject from '../assets/industrial-project-new.jpg';

export const Gallery = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      image: industrialProject,
      enTitle: 'Industrial Installation',
      swTitle: 'Usakinishaji wa Viwandani',
      enCategory: 'Electrical',
      swCategory: 'Umeme',
      span: 'md:col-span-2 md:row-span-2'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800',
      enTitle: 'Solar Power Project',
      swTitle: 'Mradi wa Nishati ya Jua',
      enCategory: 'Renewable Energy',
      swCategory: 'Nishati Mbadala',
      span: 'col-span-1 row-span-1'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
      enTitle: 'Automated Gate System',
      swTitle: 'Mfumo wa Lango la Kiotomatiki',
      enCategory: 'Automation',
      swCategory: 'Uendeshaji',
      span: 'col-span-1 row-span-1'
    }
  ];

  return (
    <section className="bg-navy-light py-24 px-[6%]" id="gallery">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <div className="text-[11px] font-bold tracking-[3px] uppercase text-brand-red mb-2.5">
            {t('Our Portfolio', 'Kazi Zetu')}
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-black uppercase leading-[0.93] mb-2">
            {t('Featured Projects', 'Miradi Iliyochaguliwa')}
          </h2>
          <p className="text-sm text-brand-gray italic">
            {t('A glimpse into our professional engineering work across Kenya.', 'Mtazamo wa kazi zetu za kihandisi nchini Kenya.')}
          </p>
        </div>
        
        <a 
          href="https://drive.google.com/drive/folders/1tWuf4NE7CeLu7UdpoKB_ArK2cXJ_RhVY" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-white hover:text-brand-red transition-colors"
        >
          <Camera size={18} className="text-brand-red" />
          <span>{t('View Full Gallery', 'Tazama Picha Zote')}</span>
          <ExternalLink size={14} className="opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className={`relative group overflow-hidden bg-navy ${project.span}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <img 
              src={project.image} 
              alt={project.enTitle}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
              <div className="text-[10px] font-bold tracking-[2px] uppercase text-brand-red mb-2">
                {t(project.enCategory, project.swCategory)}
              </div>
              <h3 className="font-display text-2xl font-black uppercase text-white mb-2">
                {t(project.enTitle, project.swTitle)}
              </h3>
              <div className="h-1 w-12 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
