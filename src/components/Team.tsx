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

      <div className="mt-16 text-center max-w-3xl mx-auto">
        <p className="text-brand-gray leading-relaxed italic">
          {t(
            'At Pexvolt Engineering, every project is treated with the same level of care — from a small domestic repair to a large industrial installation. We are proud to be based in Thika and committed to raising the standard of electrical engineering in Kenya. Contact us today for a free quote and discover why clients across Thika and Nairobi trust Pexvolt Engineering.',
            'Katika Pexvolt Engineering, kila mradi unashughulikiwa kwa kiwango kile kile cha utunzaji — kuanzia ukarabati mdogo wa nyumbani hadi usakinishaji mkubwa wa viwandani. Tunajivunia kuwa na makao yetu Thika na tumejitolea kuinua kiwango cha uhandisi wa umeme nchini Kenya. Wasiliana nasi leo kwa nukuu ya bure na ugundue kwa nini wateja kote Thika na Nairobi wanaamini Pexvolt Engineering.'
          )}
        </p>
      </div>

      {isPage && (
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="prose prose-invert prose-brand max-w-none">
            <p className="text-lg text-brand-light leading-relaxed mb-8">
              The success of Pexvolt Engineering is driven by the passion, expertise, and dedication of our founding team. As a premier <strong>electrician Thika</strong>, we believe that the human element is what truly sets us apart in a highly technical industry. Our leaders, Daniel Joshua and David Abuga, bring a wealth of diverse experience and a shared vision for elevating the standards of <strong>electrical installation Kenya</strong>. They have built a culture of excellence where every team member is empowered to deliver their best work, ensuring that our clients receive not only technical proficiency but also a level of service that is personal, professional, and deeply reliable.
            </p>
            
            <p className="text-brand-gray leading-relaxed mb-8">
              Daniel Joshua, our Director and Co-Founder, is the strategic force behind Pexvolt's growth. With years of experience in the electrical contracting landscape of Kenya, Daniel has a deep understanding of what it takes to manage complex projects from inception to completion. His leadership ensures that Pexvolt remains at the forefront of the <strong>electrical installation Kenya</strong> market, consistently delivering projects that are on time, within budget, and above all, safe. Daniel's commitment to client satisfaction is the driving force behind our <strong>24/7 emergency electrician Kenya</strong> service, as he understands that being there for our clients in their time of need is the ultimate expression of our dedication.
            </p>

            <p className="text-brand-gray leading-relaxed mb-8">
              David Abuga, our Co-Founder and lead Electrical Engineer, provides the technical backbone of our operations. With a First Class Honours degree in Computer and Electronic Systems from Mount Kenya University, David brings a level of academic excellence and hands-on expertise that is rare in the industry. His specialized knowledge in industrial electrical engineering, PLC systems, and VFDs allows us to tackle the most challenging technical problems with confidence. David is also a passionate advocate for renewable energy, leading our <strong>solar power Thika</strong> initiatives with a focus on efficiency and long-term sustainability. His technical oversight ensures that every <strong>solar power Thika</strong> system we install is engineered to the highest possible standards.
            </p>

            <p className="text-brand-gray leading-relaxed mb-8">
              Together, Daniel and David have created a team that excels in both traditional electrical work and modern security technologies. Whether it is a sophisticated <strong>CCTV installation Thika</strong> or a complex <strong>automated gate Thika</strong> system, our team approaches every task with the same level of rigor and attention to detail. We believe that a <strong>CCTV installation Thika</strong> should be more than just cameras; it should be a comprehensive security solution designed by experts. Similarly, our <strong>automated gate Thika</strong> systems are engineered for both durability and ease of use, reflecting our team's commitment to providing solutions that truly enhance the lives of our clients across the region.
            </p>

            <p className="text-brand-gray leading-relaxed mb-8">
              At Pexvolt Engineering, we are more than just a group of professionals; we are a family dedicated to serving our community. Our team's local roots in Thika mean that we are personally invested in the safety and prosperity of the area. This local focus, combined with our world-class technical expertise, makes us the ideal choice for anyone seeking a reliable <strong>electrician Thika</strong>. We are proud of the team we have built and the work we do every day to power Kenya's future. When you work with Pexvolt, you are working with a team that is experienced, dedicated, and always professional, ready to meet any electrical challenge with a smile and a solution.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
