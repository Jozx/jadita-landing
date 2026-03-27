import React from 'react';
import { useInView } from '../hooks/useInView';

const steps = [
  {
    number: '01',
    title: 'Elegís tu producto',
    description: 'Tazas, remeras, chopperas, regalos empresariales — lo que necesités.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Enviás tu diseño',
    description: 'Mandanos tu imagen, logo o idea por WhatsApp. ¡El diseño es gratis!',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
        <circle cx="9" cy="9" r="2"/>
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Recibís tu pedido',
    description: 'Enviamos al interior del país. Entrega rápida y segura a tu puerta.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12H19M12 5l7 7-7 7"/>
      </svg>
    ),
  },
];

const HowItWorks: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      aria-labelledby="how-it-works-title"
      className="py-20 bg-bg border-t border-primary/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-14 space-y-3 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-primary">
            Así funciona
          </span>
          <h2
            id="how-it-works-title"
            className="font-heading text-3xl md:text-4xl font-bold text-text"
          >
            Simple y sin vueltas
          </h2>
          <p className="font-body text-text/60 max-w-md mx-auto">
            De tu idea a tu producto en tres pasos.
          </p>
        </div>

        {/* Steps */}
        <ol className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {/* Connector line (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-primary/20 z-0"
            style={{ left: '18%', right: '18%' }}
          />

          {steps.map((step, i) => (
            <li
              key={step.number}
              className={`relative z-10 flex flex-col items-center text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: inView ? `${i * 120 + 150}ms` : '0ms' }}
            >
              {/* Icon circle */}
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center text-primary mb-5 shadow-sm ring-4 ring-bg">
                {step.icon}
              </div>
              {/* Step number */}
              <span className="font-heading text-xs font-bold text-primary/50 uppercase tracking-widest mb-2">
                Paso {step.number}
              </span>
              <h3 className="font-body font-semibold text-text text-lg mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="font-body text-sm text-text/60 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
