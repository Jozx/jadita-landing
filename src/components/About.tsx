import React from 'react';
import { AboutConfig } from '../types/site.types';
import Image from './ui/Image';
import { useInView } from '../hooks/useInView';

interface AboutProps {
  config: AboutConfig;
}

const About: React.FC<AboutProps> = ({ config }) => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="nosotras" className="py-20 md:py-32 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className={`space-y-6 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-2">
              <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-primary">
                {config.badge}
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-text leading-tight">
                {config.title}
              </h2>
            </div>
            
            <p className="font-body text-text/70 text-lg leading-relaxed max-w-xl">
              {config.description}
            </p>
            
            <div className="pt-4 flex items-center gap-4">
              <div className="w-12 h-[1px] bg-primary/30"></div>
              <span className="font-heading italic text-primary/80">Jadita Creaciones</span>
            </div>
          </div>

          {/* Image Content */}
          <div className={`relative transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src={config.image.src}
                alt={config.image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/50 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
