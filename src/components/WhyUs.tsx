import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';
import { ShieldCheck, Zap, Award, MapPin } from 'lucide-react';

export const WhyUs = ({ isPage = false }: { isPage?: boolean }) => {
  const { t } = useLanguage();

  const Heading = isPage ? 'h1' : 'h2';

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
          <Heading className="font-display text-5xl md:text-6xl font-black uppercase leading-[0.93] mb-2">
            {t('Built on Trust & Expertise', 'Imejengwa kwa Uaminifu na Utaalamu')}
          </Heading>
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

      {isPage && (
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="prose prose-invert prose-brand max-w-none">
            <p className="text-lg text-brand-light leading-relaxed mb-8">
              Choosing the right <strong>electrician Thika</strong> is a decision that impacts the safety, efficiency, and long-term value of your property. At Pexvolt Engineering, we understand the trust you place in us when we enter your home or business. That is why we have built our reputation on a foundation of unwavering expertise, transparent communication, and a relentless commitment to quality. As a premier provider of <strong>electrical installation Kenya</strong>, we don't just complete tasks; we build lasting relationships with our clients by consistently exceeding their expectations and delivering results that stand the test of time.
            </p>
            
            <p className="text-brand-gray leading-relaxed mb-8">
              One of the primary reasons our clients choose us is our team of licensed and certified engineers. In the field of <strong>electrical installation Kenya</strong>, there is no substitute for formal training and hands-on experience. Our professionals are not only highly skilled but also stay updated with the latest industry standards and technologies. This ensures that every project, whether it involves a complex <strong>solar power Thika</strong> installation or a simple residential repair, is executed with the highest level of precision and safety. We take pride in our work, and it shows in the meticulous attention to detail we bring to every job site.
            </p>

            <p className="text-brand-gray leading-relaxed mb-8">
              We also recognize that electrical issues can be stressful and disruptive. That is why we offer a fast response and are proud to be your go-to <strong>24/7 emergency electrician Kenya</strong>. Whether it is a power outage in the middle of the night or a malfunctioning <strong>automated gate Thika</strong> that is preventing you from entering your property, our emergency team is always on standby. We prioritize urgent calls to ensure that your life and business can return to normal as quickly as possible. Our local presence in Thika allows us to reach our clients faster than many competitors, providing a level of service that is both rapid and reliable.
            </p>

            <p className="text-brand-gray leading-relaxed mb-8">
              Quality is not just a buzzword at Pexvolt; it is our standard. From the components we use in a <strong>CCTV installation Thika</strong> to the wiring in a large industrial project, we never compromise on materials. We believe that using high-quality products is essential for the safety and longevity of any electrical system. This commitment to quality extends to our customer service as well. We provide clear, detailed quotes and keep you informed throughout the entire process. When you choose Pexvolt, you are choosing a partner who is as invested in the success of your project as you are, ensuring that your <strong>solar power Thika</strong> or security systems are built to last.
            </p>

            <p className="text-brand-gray leading-relaxed mb-8">
              Finally, our deep roots in the Thika community give us a unique advantage. We are not just service providers; we are your neighbors. We understand the local infrastructure, the common electrical challenges faced by residents, and the specific security needs of businesses in the area. This local expertise allows us to provide tailored solutions that are more effective and efficient. Whether you need an <strong>automated gate Thika</strong> for your home or a comprehensive <strong>CCTV installation Thika</strong> for your business, you can count on Pexvolt Engineering to deliver professional, locally-focused service that you can trust.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
