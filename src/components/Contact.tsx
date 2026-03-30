import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';
import { Phone, Smartphone, Mail, MapPin, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from 'emailjs-com';

export const Contact = ({ isPage = false }: { isPage?: boolean }) => {
  const { lang, t } = useLanguage();
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  React.useEffect(() => {
    const renderWidget = () => {
      if (window.turnstile && turnstileRef.current) {
        try {
          // Remove existing widget if it exists
          if (widgetIdRef.current) {
            window.turnstile.remove(widgetIdRef.current);
          }
          
          widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
            sitekey: '0x4AAAAAACx3AQCzs16J2HqU',
            theme: 'dark',
            language: lang,
          });
        } catch (e) {
          console.warn('Turnstile render error:', e);
        }
      }
    };

    // If turnstile is already loaded, render it
    if (window.turnstile) {
      renderWidget();
    } else {
      // Otherwise, wait for it to load
      const interval = setInterval(() => {
        if (window.turnstile) {
          renderWidget();
          clearInterval(interval);
        }
      }, 500);
      return () => clearInterval(interval);
    }

    return () => {
      if (widgetIdRef.current && window.turnstile?.remove) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (e) {
          // Ignore errors on cleanup
        }
      }
    };
  }, [lang]);

  const Heading = isPage ? 'h1' : 'h2';

  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // 1. Honeypot check (fallback spam protection)
    const honeypot = (formRef.current.elements.namedItem('website_url') as HTMLInputElement)?.value;
    if (honeypot) {
      console.warn('Spam detected via honeypot.');
      setStatus('success'); // Fake success to confuse bots
      formRef.current.reset();
      return;
    }

    // 2. Turnstile check
    const formData = new FormData(formRef.current);
    const turnstileToken = formData.get('cf-turnstile-response');

    if (!turnstileToken) {
      alert(t('Please complete the security check.', 'Tafadhali kamilisha ukaguzi wa usalama.'));
      return;
    }

    setStatus('sending');

    emailjs.sendForm(
      'service_eaxmakl',
      'template_14vq8jm',
      formRef.current,
      'mtxRD9G55AUmzNsrn'
    )
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setStatus('success');
        formRef.current?.reset();
        setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
        console.error('Failed to send email:', error.text);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  const contactInfo = [
    { icon: <Phone size={22} />, labelEn: 'Phone — Daniel Joshua', labelSw: 'Simu — Daniel Joshua', val: '0713 358 061', link: 'tel:+254713358061' },
    { icon: <Smartphone size={22} />, labelEn: 'Phone — David Abuga', labelSw: 'Simu — David Abuga', val: '0743 244 027', link: 'tel:+254743244027' },
    { icon: <Mail size={22} />, labelEn: 'Email', labelSw: 'Barua Pepe', val: 'pexvoltengineering@gmail.com', link: 'mailto:pexvoltengineering@gmail.com' },
    { icon: <MapPin size={22} />, labelEn: 'Location', labelSw: 'Mahali', val: 'Thika, Kiambu County, Kenya', link: null },
    { icon: <Clock size={22} />, labelEn: 'Working Hours', labelSw: 'Masaa ya Kazi', valEn: 'Mon–Sat: 7:00 AM – 7:00 PM | Emergency: 24/7', valSw: 'Jumatatu–Jumamosi: 7:00 AM – 7:00 PM | Dharura: 24/7', link: null },
  ];

  return (
    <section className="bg-navy py-24 px-[6%]" id="contact">
      <div className="text-[11px] font-bold tracking-[3px] uppercase text-brand-red mb-2.5">
        {t('Get in Touch', 'Wasiliana Nasi')}
      </div>
      <Heading className="font-display text-5xl md:text-6xl font-black uppercase leading-[0.93] mb-2">
        {t('Contact Us', 'Wasiliana Nasi')}
      </Heading>
      <p className="text-sm text-brand-gray italic mb-16">
        {t('Request a quote or ask us anything — we respond fast.', 'Omba bei au utuulize chochote — tunajibu haraka.')}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
        <div className="flex flex-col gap-8">
          {contactInfo.map((item, i) => (
            <div key={i} className="flex gap-5 items-start">
              <div className="w-[52px] h-[52px] min-w-[52px] bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red">
                {item.icon}
              </div>
              <div>
                <div className="text-[10px] text-brand-gray tracking-[2.5px] uppercase mb-1.5">
                  {t(item.labelEn, item.labelSw)}
                </div>
                <div className="text-base font-medium text-white leading-normal">
                  {item.link ? (
                    <a href={item.link} className="text-white no-underline transition-colors hover:text-brand-red">
                      {item.val}
                    </a>
                  ) : (
                    item.valEn ? t(item.valEn, item.valSw!) : item.val
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <form ref={formRef} onSubmit={handleSubmit} method="POST" className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] text-brand-gray tracking-widest uppercase font-semibold">{t('Your Name', 'Jina Lako')}</label>
              <input required name="from_name" type="text" placeholder="John Kamau" className="bg-white/5 border border-white/10 text-white p-3.5 font-sans text-sm outline-none transition-colors focus:border-brand-red/60 focus:bg-white/[0.04] w-full" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] text-brand-gray tracking-widest uppercase font-semibold">{t('Phone Number', 'Nambari ya Simu')}</label>
              <input required name="phone" type="tel" placeholder="07XX XXX XXX" className="bg-white/5 border border-white/10 text-white p-3.5 font-sans text-sm outline-none transition-colors focus:border-brand-red/60 focus:bg-white/[0.04] w-full" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] text-brand-gray tracking-widest uppercase font-semibold">{t('Email Address', 'Barua Pepe')}</label>
            <input required name="from_email" type="email" placeholder="you@example.com" className="bg-white/5 border border-white/10 text-white p-3.5 font-sans text-sm outline-none transition-colors focus:border-brand-red/60 focus:bg-white/[0.04] w-full" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] text-brand-gray tracking-widest uppercase font-semibold">{t('Service Needed', 'Huduma Inayohitajika')}</label>
            <select name="service" required className="bg-white/5 border border-white/10 text-white p-3.5 font-sans text-sm outline-none transition-colors focus:border-brand-red/60 focus:bg-white/[0.04] w-full appearance-none">
              <option value="" className="bg-navy-light">{t('Select a service...', 'Chagua huduma...')}</option>
              <option value="Electrical Installation" className="bg-navy-light">{t('Electrical Installation', 'Usakinishaji wa Umeme')}</option>
              <option value="Automated Gate / Fence" className="bg-navy-light">{t('Automated Gate / Fence', 'Mlango wa Kiotomatiki / Uzio')}</option>
              <option value="CCTV / Networking / Solar" className="bg-navy-light">{t('CCTV / Networking / Solar', 'CCTV / Mtandao / Nishati ya Jua')}</option>
              <option value="Lighting / Alarm Systems" className="bg-navy-light">{t('Lighting / Alarm Systems', 'Taa / Mifumo ya Kengele')}</option>
              <option value="Electrical Maintenance" className="bg-navy-light">{t('Electrical Maintenance', 'Matengenezo ya Umeme')}</option>
              <option value="Other / Custom Request" className="bg-navy-light">{t('Other / Custom Request', 'Nyingine / Ombi Maalum')}</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] text-brand-gray tracking-widest uppercase font-semibold">{t('Your Message', 'Ujumbe Wako')}</label>
            <textarea required name="message" placeholder={t('Describe your project or question...', 'Elezea mradi wako au swali...')} className="bg-white/5 border border-white/10 text-white p-3.5 font-sans text-sm outline-none transition-colors focus:border-brand-red/60 focus:bg-white/[0.04] w-full min-h-[120px] resize-y"></textarea>
          </div>

          {/* Honeypot field (hidden from users) */}
          <div className="hidden" aria-hidden="true">
            <input type="text" name="website_url" tabIndex={-1} autoComplete="off" />
          </div>

          {/* Cloudflare Turnstile Widget */}
          <div 
            ref={turnstileRef} 
            className="mt-2" 
          ></div>

          <button 
            type="submit" 
            disabled={status !== 'idle'}
            className={`bg-brand-red text-white border-none p-4 font-display text-lg font-extrabold tracking-[2.5px] uppercase cursor-pointer transition-all hover:bg-brand-red-hover w-full flex items-center justify-center gap-2 ${status === 'success' ? 'bg-green-700 hover:bg-green-700' : ''} ${status === 'error' ? 'bg-red-700 hover:bg-red-700' : ''}`}
          >
            {status === 'sending' ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                {t('Sending...', 'Inatuma...')}
              </>
            ) : status === 'success' ? (
              <>
                <CheckCircle size={20} />
                {t('Message Sent!', 'Ujumbe Umetumwa!')}
              </>
            ) : status === 'error' ? (
              <>
                <AlertCircle size={20} />
                {t('Error Sending', 'Hitilafu ya Kutuma')}
              </>
            ) : (
              t('Send Message', 'Tuma Ujumbe')
            )}
          </button>
          
          {status === 'success' && (
            <p className="text-green-500 text-xs font-bold tracking-wider uppercase text-center mt-2">
              {t('Thank you! We will get back to you shortly.', 'Asante! Tutawasiliana nawe hivi karibuni.')}
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-xs font-bold tracking-wider uppercase text-center mt-2">
              {t('Something went wrong. Please try again or call us.', 'Kuna kitu kimeenda vibaya. Tafadhali jaribu tena au tupigie.')}
            </p>
          )}
        </form>
      </div>

      {isPage && (
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="prose prose-invert prose-brand max-w-none">
            <p className="text-lg text-brand-light leading-relaxed mb-8">
              At Pexvolt Engineering, we believe that clear and open communication is the first step toward a successful partnership. Whether you have a specific project in mind or just have a general question about our services, we are always here to help. As a leading <strong>electrician Thika</strong>, we make it our priority to respond to all inquiries promptly and professionally. We understand that your time is valuable, and we strive to provide the information and support you need to make informed decisions about your property's electrical and security systems. When you reach out to us, you are not just contacting a service provider; you are connecting with a team of experts dedicated to being the best in <strong>electrical installation Kenya</strong>.
            </p>
            
            <p className="text-brand-gray leading-relaxed mb-8">
              Our contact options are designed to be as convenient as possible for our clients. You can reach our directors, Daniel Joshua and David Abuga, directly via phone for immediate assistance or to discuss the technical details of a potential project. For less urgent matters, feel free to send us an email or use the contact form on this page. We monitor our inbox closely and aim to provide detailed responses to all messages within a few hours. Whether you are inquiring about a new <strong>electrical installation Kenya</strong> or need a quote for a specialized <strong>solar power Thika</strong> system, our team is ready to provide the professional guidance you expect from a top-tier engineering firm.
            </p>

            <p className="text-brand-gray leading-relaxed mb-8">
              We also understand that electrical emergencies don't always happen during regular business hours. That is why we are proud to offer a <strong>24/7 emergency electrician Kenya</strong> service. If you are facing a critical power issue, a malfunctioning security system, or any other urgent electrical problem, do not hesitate to call us at any time of the day or night. Our emergency response team is always on standby, equipped with the tools and expertise needed to resolve crises quickly and safely. We are committed to being there for the Thika community whenever they need us most, ensuring that your home or business remains powered and protected around the clock.
            </p>

            <p className="text-brand-gray leading-relaxed mb-8">
              For those interested in enhancing their property's security and sustainability, we offer specialized consultations for <strong>CCTV installation Thika</strong> and <strong>solar power Thika</strong> projects. We can help you design a surveillance system that provides total coverage or a solar array that maximizes your energy independence. Our experts will walk you through the various options available, explaining the benefits and costs of each to help you find the perfect fit for your needs. Whether you are looking for an <strong>automated gate Thika</strong> to secure your driveway or a complex networking setup for your office, Pexvolt Engineering has the local knowledge and technical skill to deliver outstanding results.
            </p>

            <p className="text-brand-gray leading-relaxed mb-8">
              Finally, we invite you to visit us or schedule a site visit so we can assess your needs in person. Being locally based in Thika allows us to serve our clients with a level of speed and care that larger, more distant firms simply cannot match. We know the area, we know the people, and we are deeply invested in the success of every project we undertake. From a simple <strong>automated gate Thika</strong> repair to a large-scale industrial <strong>CCTV installation Thika</strong>, you can count on Pexvolt Engineering for professional, reliable, and expert service. Contact us today and let us show you why we are the preferred <strong>electrician Thika</strong> for so many homeowners and businesses across the region.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
