import React from 'react';
import { SECTIONS } from '../constants/sections';
import { ContactConfig } from '../types/site.types';
import ContactButton from './ContactButton';
import { useInView } from '../hooks/useInView';

interface ContactProps {
  channels: ContactConfig;
}

const Contact: React.FC<ContactProps> = ({ channels }) => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section
      id={SECTIONS.CONTACT}
      aria-labelledby="contact-title"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #E8D5C0 0%, #F5EDE3 50%, #FAF6F1 100%)',
      }}
    >
      {/* Decorative blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/10 blur-3xl translate-x-1/3 -translate-y-1/3"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-60 h-60 rounded-full bg-secondary/80 blur-2xl -translate-x-1/4 translate-y-1/4"
      />

      <div 
        ref={ref}
        className={`relative max-w-2xl mx-auto px-4 sm:px-6 text-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-6 transition-transform duration-500 hover:scale-110">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-primary" aria-hidden="true">
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          </svg>
        </div>

        {/* Heading */}
        <span className="block font-body text-xs font-semibold uppercase tracking-widest text-primary mb-2">
          Hablemos
        </span>
        <h2
          id="contact-title"
          className="font-heading text-3xl md:text-4xl font-bold text-text mb-4"
        >
          ¿Tenés un pedido en mente?
        </h2>
        <p className="font-body text-text/65 text-base md:text-lg mb-12 max-w-sm mx-auto">
          Escribinos y te respondemos en menos de 24 hs. ¡Sin compromiso!
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center space-y-5">
          <p className="font-body text-xs font-medium text-text/40 uppercase tracking-wider mb-1">
            ¿Listo para pedir?
          </p>
          {channels.whatsapp && <ContactButton type="whatsapp" data={channels.whatsapp} />}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-sm sm:max-w-md justify-center">
            {channels.instagram && <ContactButton type="instagram" data={channels.instagram} />}
            {channels.tiktok && <ContactButton type="tiktok" data={channels.tiktok} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
