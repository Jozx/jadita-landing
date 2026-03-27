import React from 'react';
import { SECTIONS } from '../constants/sections';
import { ProductConfig } from '../types/site.types';
import GalleryCard from './GalleryCard';
import { useInView } from '../hooks/useInView';
import siteConfig from '../config/site.config';
import { buildProductWhatsAppUrl } from '../utils/contact.utils';

interface GalleryProps {
  products: ProductConfig[];
}

const Gallery: React.FC<GalleryProps> = ({ products }) => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const { whatsapp } = siteConfig.contact;

  return (
    <section id={SECTIONS.PRODUCTS} aria-labelledby="gallery-title" className="py-16 md:py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div 
          ref={ref}
          className={`text-center mb-14 space-y-3 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-primary">
            Lo que hacemos
          </span>
          <h2
            id="gallery-title"
            className="font-heading text-3xl md:text-4xl font-bold text-text"
          >
            Nuestros productos
          </h2>
          <p className="font-body text-text/60 max-w-md mx-auto text-base">
            Cada pieza se fabrica con atención al detalle y materiales de calidad.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
          {products.map((product, i) => (
            <div
              key={product.id}
              className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: inView ? `${(i % 4) * 100 + 200}ms` : '0ms' }}
            >
              <GalleryCard 
                product={product} 
                whatsappUrl={buildProductWhatsAppUrl(whatsapp.number, product.whatsappMessage)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
