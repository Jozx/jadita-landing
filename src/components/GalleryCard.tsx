import React from 'react';
import { ProductConfig } from '../types/site.types';
import Image from './ui/Image';
import ExternalLink from './ui/ExternalLink';
import WhatsAppIcon from './ui/WhatsAppIcon';

interface GalleryCardProps {
  product: ProductConfig;
  whatsappUrl: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ product, whatsappUrl }) => {
  const fallbackSrc = `https://placehold.co/400x400/E8D5C0/8B3A2A?text=${encodeURIComponent(product.name)}`;

  return (
    <article className="group flex flex-col bg-bg border border-primary/10 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
      {/* Image container with hover overlay */}
      <div className="relative w-full aspect-square bg-secondary overflow-hidden">
        <Image
          src={product.image.src}
          alt={product.image.alt || product.name}
          fallbackSrc={fallbackSrc}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-text/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
        >
          <span className="text-white font-body text-sm font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            Consultar precio →
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="w-full py-4 px-4 flex flex-col space-y-1">
        <h3 className="font-body font-semibold text-text text-sm sm:text-base leading-snug">
          {product.name}
        </h3>
        {product.description && (
          <p className="font-body text-xs text-text/55 leading-relaxed">{product.description}</p>
        )}
        
        <ExternalLink
          href={whatsappUrl}
          ariaLabel={`Consultar sobre ${product.name} por WhatsApp`}
          className="mt-3 w-full flex items-center justify-center 
                     gap-2 py-2 rounded-full text-sm font-medium
                     bg-primary text-white hover:bg-accent 
                     transition-colors duration-200"
        >
          <WhatsAppIcon size={16} />
          Consultar precio
        </ExternalLink>
      </div>
    </article>
  );
};

export default GalleryCard;
