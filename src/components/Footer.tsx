import React from 'react';
import { BrandConfig, ContactConfig } from '../types/site.types';
import ExternalLink from './ui/ExternalLink';

interface FooterProps {
  brand: BrandConfig;
  channels?: ContactConfig;
}

const SocialIcon: React.FC<{ href: string; label: string; children: React.ReactNode }> = ({ href, label, children }) => (
  <ExternalLink
    href={href}
    ariaLabel={label}
    className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/15 flex items-center justify-center text-accent hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
  >
    {children}
  </ExternalLink>
);

const Footer: React.FC<FooterProps> = ({ brand, channels }) => {
  return (
    <footer className="bg-text py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">

          {/* Brand */}
          <div className="mb-8">
            <span className="font-heading text-3xl font-bold text-secondary">{brand.name.split(' ')[0]}</span>
            <p className="font-body text-sm text-secondary/50 mt-1">{brand.tagline}</p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10" aria-label="Footer Navigation">
            <a href="#inicio" className="text-secondary/70 hover:text-secondary text-sm font-medium transition-colors">Inicio</a>
            <a href="#productos" className="text-secondary/70 hover:text-secondary text-sm font-medium transition-colors">Productos</a>
            <a href="#contacto" className="text-secondary/70 hover:text-secondary text-sm font-medium transition-colors">Contacto</a>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4 mb-10">
            {channels?.whatsapp && (
              <SocialIcon href={channels.whatsapp.url} label="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01H7.54c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </SocialIcon>
            )}
            {channels?.instagram && (
              <SocialIcon href={channels.instagram.url} label="Instagram">
                <svg fill="currentColor" width="18" height="18" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </SocialIcon>
            )}
            {channels?.tiktok && (
              <SocialIcon href={channels.tiktok.url} label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.51.33-5.18 2.06-7.07 1.45-1.55 3.55-2.45 5.66-2.52 0 1.35 0 2.71 0 4.06-1.55.15-2.91.95-3.8 2.14-.85 1.18-.95 2.75-.5 4.12.35 1.05 1.14 1.91 2.1 2.45 1.02.58 2.24.71 3.36.43 1.28-.31 2.37-1.18 3.03-2.3 0-5.45-.03-10.9.02-16.35z" />
                </svg>
              </SocialIcon>
            )}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-secondary/20" />

          {/* Legal */}
          <p className="font-body text-xs text-secondary/40">
            © {brand.year} {brand.name} · {brand.location} · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
