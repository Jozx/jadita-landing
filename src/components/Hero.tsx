import React from 'react';
import { SECTIONS } from '../constants/sections';
import { BrandConfig, ImageConfig, ContactChannel } from '../types/site.types';
import Image from './ui/Image';
import ExternalLink from './ui/ExternalLink';

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* — Left: copy — */}
          <div className="flex flex-col space-y-8 text-center lg:text-left">

            {/* Eyebrow */}
            <span className="animate-fade-up inline-flex self-center lg:self-start items-center gap-2 bg-secondary text-accent text-xs font-body font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
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
              <p className="font-body text-lg sm:text-xl text-text/70 max-w-lg mx-auto lg:mx-0">
                {brand.subtagline}
              </p>
            </div>

            {/* CTA */}
            <div className="animate-fade-up delay-200 flex justify-center lg:justify-start">
              <ExternalLink
                href={cta.url}
                ariaLabel={cta.label}
                className="inline-flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-dark text-white px-8 py-4 rounded-full font-body font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-whatsapp/30 hover:shadow-xl"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01H7.54c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                {cta.label}
              </ExternalLink>
            </div>

            {/* Trust badges */}
            <ul
              aria-label="Por qué elegirnos"
              className="animate-fade-up delay-300 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2"
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
          <div className="animate-fade-in delay-200 relative w-full h-[380px] lg:h-[520px] mt-4 lg:mt-0">
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full h-full rounded-3xl shadow-2xl object-cover"
              loading="eager"
            />
            {/* Decorative frame */}
            <div
              aria-hidden="true"
              className="absolute -z-10 inset-0 translate-x-4 translate-y-4 rounded-3xl border-2 border-primary/25"
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
