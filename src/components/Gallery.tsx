import React from 'react';
import { SECTIONS } from '../constants/sections';
import { ProductConfig } from '../types/site.types';
import GalleryCard from './GalleryCard';

interface GalleryProps {
  products: ProductConfig[];
}

const Gallery: React.FC<GalleryProps> = ({ products }) => {
  return (
    <section id={SECTIONS.PRODUCTS} aria-labelledby="gallery-title" className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="gallery-title" className="text-3xl md:text-4xl font-heading font-bold text-center text-text mb-12">
          Nuestros productos
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <GalleryCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
