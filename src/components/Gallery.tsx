import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';
import { ExternalLink, Camera } from 'lucide-react';
const industrialImg = 'https://images.unsplash.com/photo-1565085360602-11a40b7b5e5e?auto=format&fit=crop&q=80&w=800';

export const Gallery = ({ isPage = false }: { isPage?: boolean }) => {
  const { t } = useLanguage();

  const Heading = isPage ? 'h1' : 'h2';

  const projects = [
    {
      id: 1,
      image: industrialImg,
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
          <Heading className="font-display text-5xl md:text-6xl font-black uppercase leading-[0.93] mb-2">
            {t('Featured Projects', 'Miradi Iliyochaguliwa')}
          </Heading>
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
              loading="lazy"
              decoding="async"
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

      {isPage && (
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="prose prose-invert prose-brand max-w-none">
            <p className="text-lg text-brand-light leading-relaxed mb-8">
              Our portfolio is a testament to the diverse range of projects we have successfully executed across the region, showcasing our versatility as a top-tier <strong>electrician Thika</strong>. From large-scale industrial complexes to intimate residential spaces, every project in our gallery represents a unique challenge that we met with technical precision and creative problem-solving. We believe that our work speaks for itself, demonstrating our commitment to being the leading provider of <strong>electrical installation Kenya</strong>. Each image captures a moment of engineering excellence, where safety, functionality, and aesthetics converge to create a superior electrical environment for our clients.
            </p>
            
            <p className="text-brand-gray leading-relaxed mb-8">
              One of the highlights of our portfolio is our extensive work in the industrial sector. These projects often involve complex power distribution systems, heavy-duty machinery wiring, and sophisticated control panels. In the competitive field of <strong>electrical installation Kenya</strong>, our ability to handle such large-scale operations with zero compromise on safety has made us a preferred partner for many industrial facilities. We ensure that every industrial installation is built to withstand the rigors of daily operation while maintaining peak efficiency, helping our clients minimize downtime and maximize productivity through professional engineering.
            </p>

            <p className="text-brand-gray leading-relaxed mb-8">
              Our commitment to a greener future is also prominently featured in our portfolio through various <strong>solar power Thika</strong> projects. We have helped numerous homeowners and businesses transition to renewable energy, installing systems that range from simple backup solutions to full off-grid arrays. Each <strong>solar power Thika</strong> installation is custom-designed to meet the specific energy needs and site conditions of our clients. By showcasing these projects, we hope to inspire more people in the community to embrace sustainable energy solutions that are both environmentally friendly and economically sound in the long run.
            </p>

            <p className="text-brand-gray leading-relaxed mb-8">
              Security and automation are also key areas where we excel, as seen in our <strong>automated gate Thika</strong> and CCTV projects. An <strong>automated gate Thika</strong> is more than just a luxury; it is a vital component of a modern security strategy. Our portfolio includes a variety of gate systems, from sliding to swing gates, all integrated with advanced access control for maximum security and convenience. Similarly, our <strong>CCTV installation Thika</strong> projects demonstrate our ability to provide comprehensive surveillance solutions that protect properties from every angle. These projects highlight our holistic approach to security, combining physical barriers with electronic monitoring for total peace of mind.
            </p>

            <p className="text-brand-gray leading-relaxed mb-8">
              Finally, our portfolio reflects our readiness to handle any electrical challenge, including those that require immediate attention. As a trusted <strong>24/7 emergency electrician Kenya</strong>, we have been called upon to resolve critical power issues at all hours of the day and night. While these emergency repairs may not always be the most visually striking projects in our gallery, they are among the most important work we do. They demonstrate our reliability, our technical skill under pressure, and our unwavering dedication to serving the Thika community whenever an electrical crisis occurs. Whether it is a planned project or an urgent repair, Pexvolt Engineering is always ready to deliver excellence.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
