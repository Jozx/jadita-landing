import React from 'react';
import { ProductConfig } from '../types/site.types';
import Image from './ui/Image';

interface GalleryCardProps {
  product: ProductConfig;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ product }) => {
  return (
    <article className="group flex flex-col items-center bg-white border border-primary/20 rounded-xl shadow-sm overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="w-full aspect-square bg-secondary overflow-hidden">
        <Image 
          src={product.image.src} 
          alt={product.image.alt || product.name} 
          className="w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="w-full text-center py-4 px-2 bg-white flex flex-col items-center justify-center space-y-1">
        <h3 className="font-body font-medium text-text text-sm sm:text-base">
          {product.name}
        </h3>
        {product.description && (
          <p className="font-body text-xs text-text/70 px-1 leading-snug">{product.description}</p>
        )}
      </div>
    </article>
  );
};

export default GalleryCard;
