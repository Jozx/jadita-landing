import React from 'react';
import siteConfig from '../../config/site.config';
import WhatsAppIcon from './WhatsAppIcon';

const WhatsAppFloat: React.FC = () => {
  const { whatsapp } = siteConfig.contact;

  return (
    <a
      href={whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-300"
      style={{
        animation: 'whatsapp-pulse 2s infinite',
      }}
    >
      <WhatsAppIcon size={28} />
      <style>{`
        @keyframes whatsapp-pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          70% { box-shadow: 0 0 0 12px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
      `}</style>
    </a>
  );
};

export default WhatsAppFloat;
