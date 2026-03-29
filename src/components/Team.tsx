import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';
import { Phone } from 'lucide-react';

export const Team = ({ isPage = false }: { isPage?: boolean }) => {
  const { t } = useLanguage();

  const Heading = isPage ? 'h1' : 'h2';

  const members = [
    {
      initials: 'DJ',
      name: 'Daniel Joshua',
      enRole: 'Director & Co-Founder',
      swRole: 'Mkurugenzi na Mwanzilishi Mwenza',
      enDesc: 'Daniel leads Pexvolt Engineering with a passion for delivering exceptional electrical solutions. With extensive experience in electrical contracting across Kenya, he oversees all projects and ensures every client receives outstanding service and results.',
      swDesc: 'Daniel anaongoza Pexvolt Engineering kwa shauku ya kutoa suluhisho bora za umeme. Ana uzoefu mkubwa katika ukandarasi wa umeme na anasimamia miradi yote.',
      phone: '0713 358 061'
    },
    {
      initials: 'DA',
      name: 'David Abuga',
      enRole: 'Electrical Engineer & Co-Founder',
      swRole: 'Mhandisi wa Umeme na Mwanzilishi Mwenza',
      enDesc: 'David holds a Bachelor of Technology in Computer and Electronic Systems from Mount Kenya University (First Class Honours, 2025). He brings hands-on expertise in industrial electrical engineering, PLC systems, motor control, VFDs, and solar power installations.',
      swDesc: 'David ana shahada ya Teknolojia katika Mifumo ya Kompyuta na Elektroniki kutoka Mount Kenya University (Heshima ya Darasa la Kwanza, 2025). Analeta ujuzi wa vitendo katika uhandisi wa umeme wa viwanda.',
      phone: '0743 244 027'
    }
  ];

  return (
    <section className="bg-navy-light py-24 px-[6%]" id="team">
      <div className="text-[11px] font-bold tracking-[3px] uppercase text-brand-red mb-2.5">
        {t('The People Behind Pexvolt', 'Watu Nyuma ya Pexvolt')}
      </div>
      <Heading className="font-display text-5xl md:text-6xl font-black uppercase leading-[0.93] mb-2">
        {t('Our Team', 'Timu Yetu')}
      </Heading>
      <p className="text-sm text-brand-gray italic mb-14">
        {t('Experienced. Dedicated. Professional.', 'Wenye uzoefu. Walijitolea. Wataalamu.')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {members.map((m, i) => (
          <motion.div 
            key={i}
            className="bg-navy border border-white/10 p-10 md:p-12 relative overflow-hidden transition-all hover:border-brand-red/30 group flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="absolute -top-5 -right-5 w-32 h-32 bg-brand-red/5 rounded-full"></div>
            <div className="w-20 h-20 bg-brand-red flex items-center justify-center font-display text-3xl font-black text-white mb-6 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
              {m.initials}
            </div>
            <h3 className="font-display text-3xl font-black uppercase tracking-wide mb-1">
              {m.name}
            </h3>
            <div className="text-xs text-brand-red font-bold tracking-[2px] uppercase mb-5">
              {t(m.enRole, m.swRole)}
            </div>
            <p className="text-sm text-brand-gray leading-relaxed mb-7">
              {t(m.enDesc, m.swDesc)}
            </p>
            <div className="flex items-center gap-3 text-lg font-semibold text-brand-light font-display tracking-wider">
              <div className="w-8 h-8 bg-brand-red/15 border border-brand-red/30 rounded-full flex items-center justify-center text-xs shrink-0">
                <Phone size={14} className="text-brand-red" />
              </div>
              {m.phone}
            </div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
