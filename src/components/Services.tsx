import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';
import { Factory, Fence, ShieldCheck, Lightbulb, Wrench } from 'lucide-react';

export const Services = ({ isPage = false }: { isPage?: boolean }) => {
  const { t } = useLanguage();

  const Heading = isPage ? 'h1' : 'h2';

  const services = [
    {
      num: '01',
      icon: <Factory size={28} />,
      enTitle: 'Electrical Installations',
      swTitle: 'Usakinishaji wa Umeme',
      enSub: 'Domestic & Industrial',
      swSub: 'Nyumba na Viwanda',
      enDesc: 'Complete wiring, panels and electrical system installations for homes, commercial buildings and industrial facilities — built to the highest safety standards.',
      swDesc: 'Usakinishaji kamili wa nyaya, paneli na mifumo ya umeme kwa makazi, majengo ya biashara na viwanda kulingana na viwango vya usalama.'
    },
    {
      num: '02',
      icon: <Fence size={28} />,
      enTitle: 'Automated Gates & Fencing',
      swTitle: 'Malango ya Kiotomatiki na Uzio',
      enSub: 'Security & Access Control',
      swSub: 'Usalama na Udhibiti',
      enDesc: 'Supply, installation and commissioning of automated gate systems and electric fence security solutions — keeping your home and business protected.',
      swDesc: 'Utoaji, usakinishaji na uwekaji wa mifumo ya malango ya kiotomatiki na uzio wa umeme kwa usalama wa mali yako.'
    },
    {
      num: '03',
      icon: <ShieldCheck size={28} />,
      enTitle: 'CCTV, Networking & Solar',
      swTitle: 'CCTV, Mtandao na Nishati ya Jua',
      enSub: 'Surveillance & Backup Power',
      swSub: 'Ufuatiliaji na Nishati Mbadala',
      enDesc: 'Professional CCTV surveillance systems, structured computer networking, and solar power backup solutions — tailored to your security and energy needs.',
      swDesc: 'Mifumo ya ufuatiliaji wa CCTV, mtandao wa kompyuta na suluhisho za nishati ya jua kulingana na mahitaji yako.'
    },
    {
      num: '04',
      icon: <Lightbulb size={28} />,
      enTitle: 'Lighting & Alarm Systems',
      swTitle: 'Taa na Mifumo ya Kengele',
      enSub: 'Interior, Exterior & Security',
      swSub: 'Ndani, Nje na Usalama',
      enDesc: 'Design and installation of indoor and outdoor lighting, intruder alarm systems and motion-sensor security lighting — complete property protection.',
      swDesc: 'Usanifu na usakinishaji wa taa za ndani na nje, mifumo ya kengele ya wavamizi na taa za usalama — ulinzi kamili wa mali.'
    },
    {
      num: '05',
      icon: <Wrench size={28} />,
      enTitle: 'Electrical Maintenance',
      swTitle: 'Matengenezo ya Umeme',
      enSub: 'Preventive & Corrective',
      swSub: 'Kinga na Marekebisho',
      enDesc: 'Scheduled preventive maintenance and rapid corrective repairs for all electrical systems — minimising downtime and keeping your installations running safely.',
      swDesc: 'Matengenezo ya kuzuia yaliyopangwa na ukarabati wa haraka wa mifumo yote ya umeme — kupunguza muda wa kukosekana.'
    }
  ];

  return (
    <section className="bg-navy-light py-24 px-[6%]" id="services">
      <div className="text-[11px] font-bold tracking-[3px] uppercase text-brand-red mb-2.5">
        {t('What We Do', 'Tunachofanya')}
      </div>
      <Heading className="font-display text-5xl md:text-6xl font-black uppercase leading-[0.93] mb-2">
        {t('Our Services', 'Huduma Zetu')}
      </Heading>
      <p className="text-sm text-brand-gray italic mb-16">
        {t('Complete electrical solutions — from installation to maintenance', 'Suluhisho kamili za umeme — kutoka usakinishaji hadi matengenezo')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
        {services.map((svc, i) => (
          <motion.div 
            key={i}
            className="group bg-navy-light p-11 relative overflow-hidden transition-colors hover:bg-[#0c1e3a] flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="font-display text-8xl font-black text-white/[0.025] absolute top-1 right-3 leading-none pointer-events-none select-none">
              {svc.num}
            </div>
            <div className="w-14 h-14 bg-brand-red/10 border border-brand-red/25 flex items-center justify-center text-brand-red mb-5 shrink-0">
              {svc.icon}
            </div>
            <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide text-white mb-1.5 leading-tight">
              {t(svc.enTitle, svc.swTitle)}
            </h3>
            <div className="text-xs text-brand-red italic font-medium mb-3.5">
              {t(svc.enSub, svc.swSub)}
            </div>
            <p className="text-sm text-brand-gray leading-relaxed">
              {t(svc.enDesc, svc.swDesc)}
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-red to-brand-red/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </motion.div>
        ))}

        <div className="bg-brand-red/5 border border-brand-red/20 flex flex-col items-center justify-center text-center gap-6 p-11">
          <div className="w-20 h-20 bg-brand-red rounded-xl flex items-center justify-center font-display font-black text-5xl text-navy shadow-[0_0_30px_rgba(204,26,26,0.3)]">
            P
          </div>
          <div>
            <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide mb-2.5">
              {t('Need a Custom Solution?', 'Unahitaji Suluhisho Maalum?')}
            </h3>
            <p className="text-sm text-brand-gray mb-5 leading-relaxed">
              {t('We handle any electrical challenge — big or small. Contact us today.', 'Tunashughulikia changamoto yoyote ya umeme — kubwa au ndogo.')}
            </p>
            <a href="#contact" className="inline-block bg-brand-red text-white px-7 py-3 text-sm font-bold tracking-widest uppercase no-underline transition-colors hover:bg-brand-red-hover">
              {t('Talk to Us', 'Zungumza Nasi')}
            </a>
          </div>
        </div>
      </div>

      {isPage && (
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="prose prose-invert prose-brand max-w-none">
            <p className="text-lg text-brand-light leading-relaxed mb-8">
              Pexvolt Engineering is your premier partner for all things electrical, serving as a cornerstone of reliability and technical excellence in the region. As a leading <strong>electrician Thika</strong>, we pride ourselves on delivering top-tier solutions that meet the diverse and evolving needs of our residential, commercial, and industrial clients. Our commitment to excellence is reflected in every project we undertake, from the smallest home repair to the most complex industrial setup, ensuring that your property is powered safely, efficiently, and sustainably for years to come. Whether you are looking for a comprehensive <strong>electrical installation Kenya</strong> or need specialized security systems, our team of certified professionals is here to provide expert guidance and flawless execution.
            </p>
            
            <p className="text-brand-gray leading-relaxed mb-8">
              Our core expertise lies in high-quality Electrical Installations, which form the backbone of any modern infrastructure. We handle everything from complete domestic wiring for new homes to complex industrial power systems that require precision engineering and deep technical knowledge. In the rapidly growing landscape of <strong>electrical installation Kenya</strong>, Pexvolt stands out by adhering to the strictest safety protocols and using only the most reliable, high-grade materials. We understand that a robust electrical foundation is crucial for any building's longevity and safety, and we work tirelessly to ensure that your infrastructure is future-proof, energy-efficient, and fully compliant with all local and international regulations.
            </p>

            <p className="text-brand-gray leading-relaxed mb-8">
              Security is another critical pillar of our service offering, as we believe that peace of mind is just as important as reliable power. We specialize in the supply, installation, and commissioning of <strong>automated gate Thika</strong> systems and high-voltage electric fencing. An <strong>automated gate Thika</strong> provides not only unparalleled convenience for your daily life but also serves as a significant boost to your property's overall security profile. By integrating advanced access control technologies with durable physical barriers, we help homeowners and business owners across the region protect their most valuable assets. Our fencing solutions are designed to be both a powerful deterrent and a reliable defense, ensuring that your perimeter remains secure against any unauthorized access at all times.
            </p>

            <p className="text-brand-gray leading-relaxed mb-8">
              In an era where technology and sustainability go hand in hand, Pexvolt offers cutting-edge CCTV, Networking, and Solar solutions tailored to the modern world. A professional <strong>CCTV installation Thika</strong> is essential for modern property management, providing real-time surveillance, remote monitoring, and a permanent record of events for your peace of mind. Furthermore, our <strong>solar power Thika</strong> projects are helping local residents and businesses transition to clean, renewable energy, significantly reducing their reliance on the national grid and lowering their long-term utility costs. Whether it is a simple backup system for your home or a large-scale industrial solar array, our <strong>solar power Thika</strong> experts will design a custom system that maximizes energy efficiency and provides a high return on investment.
            </p>

            <p className="text-brand-gray leading-relaxed mb-8">
              Lighting and Alarm Systems are vital for both the aesthetics and the safety of any property. We design and install sophisticated interior and exterior lighting schemes that enhance the beauty and functionality of your space while ensuring optimal visibility and energy savings. Coupled with our advanced intruder alarm systems and motion-sensor security lighting, we provide a holistic and integrated approach to property protection. Finally, our Electrical Maintenance services ensure that your systems remain in peak condition throughout their lifespan. We offer both scheduled preventive maintenance and rapid corrective repairs for all electrical systems to minimize downtime and prevent costly failures. Should an unexpected issue arise, we are proud to be your reliable <strong>24/7 emergency electrician Kenya</strong>, ready to respond to any crisis at any hour, ensuring that your power is restored quickly, safely, and professionally whenever you need us most.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
