import React from 'react';
import { BrandConfig, ContactConfig } from '../types/site.types';
import ExternalLink from './ui/ExternalLink';
import WhatsAppIcon from './ui/WhatsAppIcon';

interface FooterProps {
  brand: BrandConfig;
  channels?: ContactConfig;
}

const SocialIcon: React.FC<{ href: string; label: string; children: React.ReactNode }> = ({ href, label, children }) => (
  <ExternalLink
    href={href}
    ariaLabel={label}
    className="w-10 h-10 rounded-full bg-secondary/10 hover:bg-secondary/20 flex items-center justify-center text-secondary/60 hover:text-secondary transition-all"
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
          <div className="mb-6">
            <span className="font-heading text-3xl font-bold text-secondary">{brand.name.split(' ')[0]}</span>
            <p className="font-body text-sm text-secondary/50 mt-1 uppercase tracking-widest">{brand.tagline}</p>
            <p className="text-sm text-[#C4724A] mt-1">
              📍 San Lorenzo, Paraguay
            </p>
            <p className="text-xs text-[#8B3A2A] mt-1 italic">
              Hecho con amor para regalos únicos
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10" aria-label="Footer Navigation">
            <a href="#inicio" className="text-secondary/70 hover:text-secondary text-sm font-medium transition-colors">Inicio</a>
            <a href="#nosotras" className="text-secondary/70 hover:text-secondary text-sm font-medium transition-colors">Nosotras</a>
            <a href="#productos" className="text-secondary/70 hover:text-secondary text-sm font-medium transition-colors">Productos</a>
            <a href="#contacto" className="text-secondary/70 hover:text-secondary text-sm font-medium transition-colors">Contacto</a>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4 mb-10">
            {channels?.whatsapp && (
              <SocialIcon href={channels.whatsapp.url} label="WhatsApp">
                <WhatsAppIcon size={20} />
              </SocialIcon>
            )}
            {channels?.instagram && (
              <SocialIcon href={channels.instagram.url} label="Instagram">
                <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </SocialIcon>
            )}
            {channels?.tiktok && (
              <SocialIcon href={channels.tiktok.url} label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.51.33-5.18 2.06-7.07 1.45-1.55 3.55-2.45 5.66-2.52 0 1.35 0 2.71 0 4.06-1.55.15-2.91.95-3.8 2.14-.85 1.18-.95 2.75-.5 4.12.35 1.05 1.14 1.91 2.1 2.45 1.02.58 2.24.71 3.36.43 1.28-.31 2.37-1.18 3.03-2.3 0-5.45-.03-10.9.02-16.35z" />
                </svg>
              </SocialIcon>
            )}
          </div>

          {/* Divider */}
          <hr className="border-[#C4724A]/20 my-4 w-24 mx-auto" />

          {/* Legal */}
          <p className="font-body text-[10px] text-secondary/30 uppercase tracking-widest">
            © {brand.year} {brand.name} · Hecho en San Lorenzo, Paraguay
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
