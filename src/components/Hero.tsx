import React from 'react';
import { SECTIONS } from '../constants/sections';
import { BrandConfig, ImageConfig, ContactChannel } from '../types/site.types';
import Image from './ui/Image';
import ExternalLink from './ui/ExternalLink';
import WhatsAppIcon from './ui/WhatsAppIcon';

interface HeroProps {
  brand: BrandConfig;
  image: ImageConfig;
  cta: ContactChannel;
}

const trustBadges = [
  { icon: '✦', label: '500+ pedidos entregados' },
  { icon: '✦', label: 'Envíos al interior' },
  { icon: '✦', label: 'Diseño gratis' },
];

const Hero: React.FC<HeroProps> = ({ brand, image, cta }) => {
  return (
    <section
      id={SECTIONS.HERO}
      className="relative min-h-screen flex items-center bg-bg overflow-hidden pt-20"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-20 w-[340px] h-[340px] rounded-full bg-secondary/60 blur-2xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* — Left: copy — */}
          <div className="flex flex-col space-y-8 text-center md:text-left">

            {/* Eyebrow */}
            <span className="animate-fade-up inline-flex self-center md:self-start items-center gap-2 bg-secondary text-accent text-xs font-body font-semibold uppercase tracking-widest px-4 py-2 rounded-full shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Sublimación · San Lorenzo, Paraguay
            </span>

            {/* Headline */}
            <div className="space-y-3 animate-fade-up delay-100">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[58px] leading-[1.1] font-bold text-text">
                Regalos que{' '}
                <span className="relative inline-block text-primary">
                  dejan huella
                  <span
                    aria-hidden="true"
                    className="absolute left-0 -bottom-1 w-full h-[3px] rounded-full bg-primary/30"
                  />
                </span>
              </h1>
              <p className="font-body text-lg sm:text-xl text-text/70 max-w-lg mx-auto md:mx-0">
                {brand.subtagline}
              </p>
            </div>

            {/* CTA */}
            <div className="animate-fade-up delay-200 flex justify-center md:justify-start">
              <ExternalLink
                href={cta.url}
                ariaLabel={cta.label}
                className="inline-flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-dark text-white px-8 py-4 rounded-full font-body font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-whatsapp/30 hover:shadow-xl"
              >
                <WhatsAppIcon size={22} />
                {cta.label}
              </ExternalLink>
            </div>

            {/* Trust badges */}
            <ul
              aria-label="Por qué elegirnos"
              className="animate-fade-up delay-300 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2"
            >
              {trustBadges.map((badge) => (
                <li key={badge.label} className="flex items-center gap-1.5 text-sm text-text/60 font-body">
                  <span className="text-primary text-xs">{badge.icon}</span>
                  {badge.label}
                </li>
              ))}
            </ul>
          </div>

          {/* — Right: image — */}
          <div className="animate-fade-in delay-200 relative w-full h-full min-h-[300px] md:min-h-[500px] mt-4 md:mt-0 order-last md:order-none">
            <div className="w-full h-full rounded-2xl shadow-2xl overflow-hidden relative">
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
            </div>
            
            {/* Decorative frame */}
            <div
              aria-hidden="true"
              className="absolute -z-10 inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-primary/25"
            />
            {/* Floating badge - hidden on very small screens to avoid overflow */}
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 bg-bg border border-secondary shadow-lg rounded-2xl px-5 py-3 hidden sm:flex flex-col items-center"
            >
              <span className="font-heading text-2xl font-bold text-primary leading-none">500+</span>
              <span className="font-body text-xs text-text/60 mt-0.5">pedidos felices</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
