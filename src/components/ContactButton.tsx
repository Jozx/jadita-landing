import React from 'react';
import { ContactChannel } from '../types/site.types';
import ExternalLink from './ui/ExternalLink';
import WhatsAppIcon from './ui/WhatsAppIcon';

const stylesMap: Record<string, string> = {
  whatsapp: 'bg-whatsapp hover:bg-whatsapp-dark text-white py-4 text-base shadow-lg shadow-whatsapp/20',
  instagram: 'border border-instagram-pink/30 hover:bg-instagram-pink/5 text-text py-3 text-sm',
  tiktok: 'border border-black/10 hover:bg-black/5 text-text py-3 text-sm',
};

const iconsMap: Record<string, React.ReactNode> = {
  whatsapp: <WhatsAppIcon size={24} className="mr-3" />,
  instagram: <svg fill="currentColor" width="20" height="20" viewBox="0 0 24 24" className="mr-2"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  tiktok: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.51.33-5.18 2.06-7.07 1.45-1.55 3.55-2.45 5.66-2.52 0 1.35 0 2.71 0 4.06-1.55.15-2.91.95-3.8 2.14-.85 1.18-.95 2.75-.5 4.12.35 1.05 1.14 1.91 2.1 2.45 1.02.58 2.24.71 3.36.43 1.28-.31 2.37-1.18 3.03-2.3 0-5.45-.03-10.9.02-16.35z"/></svg>,
};

interface ContactButtonProps {
  type: 'whatsapp' | 'instagram' | 'tiktok';
  data: ContactChannel;
}

const ContactButton: React.FC<ContactButtonProps> = ({ type, data }) => {
  const customClass = stylesMap[type] || 'bg-primary hover:bg-accent text-white py-4 text-base';
  
  return (
    <ExternalLink
      href={data.url}
      className={`flex items-center justify-center w-full rounded-full transition-all duration-300 hover:-translate-y-1 font-body font-semibold ${customClass}`}
      ariaLabel={data.label}
    >
      {iconsMap[type]}
      {data.label}
    </ExternalLink>
  );
};

export default ContactButton;
