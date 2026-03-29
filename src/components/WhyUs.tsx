import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';
import { ShieldCheck, Zap, Award, MapPin } from 'lucide-react';

export const WhyUs = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: <ShieldCheck size={22} />,
      enTitle: 'Licensed & Certified Engineers',
      swTitle: 'Wahandisi Wenye Leseni na Cheti',
      enDesc: 'All work is carried out by qualified, certified electrical engineers to the highest safety standards — giving you complete peace of mind.',
      swDesc: 'Kazi yetu yote inafanywa na wahandisi wa umeme wenye sifa na cheti kulingana na viwango vya usalama vya juu.'
    },
    {
      icon: <Zap size={22} />,
      enTitle: 'Fast Response & 24/7 Emergency',
      swTitle: 'Majibu ya Haraka na Dharura 24/7',
      enDesc: "Electrical emergencies don't keep office hours. We are available around the clock — responding fast when you need us most.",
      swDesc: 'Dharura za umeme hazizingatii masaa ya ofisi. Tuko tayari saa nzima kukusaidia unapotuhitaji zaidi.'
    },
    {
      icon: <Award size={22} />,
      enTitle: 'Quality You Can Count On',
      swTitle: 'Ubora Unaoaminika',
      enDesc: 'We use only high-quality materials and proven methods. Every installation is tested, verified and backed by our full guarantee.',
      swDesc: 'Tunatumia tu vifaa vya ubora wa juu na mbinu zilizothibitishwa. Kila usakinishaji unajaribiwa na kudhaminiwa.'
    },
    {
      icon: <MapPin size={22} />,
      enTitle: 'Locally Based in Thika',
      swTitle: 'Tuko Hapa Thika',
      enDesc: 'We are your neighbours. Based in Thika, we know the local infrastructure and serve clients across Thika and Nairobi with speed and care.',
      swDesc: 'Sisi ni majirani yako. Tuko Thika, tunajua miundombinu ya ndani na tunahudumia wateja kote Thika na Nairobi.'
    }
  ];

  return (
    <section className="bg-navy py-24 px-[6%]" id="why">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="text-[11px] font-bold tracking-[3px] uppercase text-brand-red mb-2.5">
            {t('Why Choose Us', 'Kwa Nini Sisi')}
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-black uppercase leading-[0.93] mb-2">
            {t('Built on Trust & Expertise', 'Imejengwa kwa Uaminifu na Utaalamu')}
          </h2>
          <p className="text-sm text-brand-gray italic mb-12">
            {t('Professional electrical engineering, delivered with pride.', 'Uhandisi wa umeme wa kitaalamu, unaotolewa kwa fahari.')}
          </p>

          <div className="flex flex-col gap-8">
            {reasons.map((reason, i) => (
              <motion.div 
                key={i} 
                className="flex gap-5 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-11 h-11 min-w-[44px] bg-brand-red/10 border border-brand-red/25 flex items-center justify-center text-brand-red mt-0.5">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide mb-1.5">
                    {t(reason.enTitle, reason.swTitle)}
                  </h3>
                  <p className="text-sm text-brand-gray leading-relaxed">
                    {t(reason.enDesc, reason.swDesc)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-0.5 bg-white/5">
          <div className="bg-brand-red p-9 md:p-12 text-center flex flex-col items-center justify-center">
            <div className="font-display text-5xl md:text-6xl font-black leading-none mb-1.5">5+</div>
            <div className="text-[10px] md:text-[11px] tracking-[2px] uppercase opacity-75">{t('Years Experience', 'Miaka ya Uzoefu')}</div>
          </div>
          <div className="bg-navy-light p-9 md:p-12 text-center flex flex-col items-center justify-center">
            <div className="font-display text-5xl md:text-6xl font-black leading-none mb-1.5">500+</div>
            <div className="text-[10px] md:text-[11px] tracking-[2px] uppercase opacity-75">{t('Projects Completed', 'Miradi Iliyokamilika')}</div>
          </div>
          <div className="bg-navy-light p-9 md:p-12 text-center flex flex-col items-center justify-center">
            <div className="font-display text-5xl md:text-6xl font-black leading-none mb-1.5">100%</div>
            <div className="text-[10px] md:text-[11px] tracking-[2px] uppercase opacity-75">{t('Client Satisfaction', 'Kuridhika kwa Wateja')}</div>
          </div>
          <div className="bg-brand-red p-9 md:p-12 text-center flex flex-col items-center justify-center">
            <div className="font-display text-5xl md:text-6xl font-black leading-none mb-1.5">24/7</div>
            <div className="text-[10px] md:text-[11px] tracking-[2px] uppercase opacity-75">{t('Always Available', 'Daima Tayari')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
