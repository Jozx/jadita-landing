import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import siteConfig from './config/site.config';
import { ContactChannel } from './types/site.types';

function App() {
  const ctaPath: string[] = ['contact', 'whatsapp']; // Hard-mapping because of the way TS types site.config
  // In TS it's better to just pass siteConfig.contact.whatsapp directly, but keeping structure close
  const resolvedCta = siteConfig.contact.whatsapp as ContactChannel;

  return (
    <div className="font-body text-text bg-bg antialiased selection:bg-primary/20 selection:text-text">
      <Navbar 
        brand={siteConfig.brand} 
        navLinks={siteConfig.nav} 
      />
      <main>
        <Hero 
          brand={siteConfig.brand} 
          image={siteConfig.hero.image} 
          cta={resolvedCta} 
        />
        <Gallery products={siteConfig.products} />
        <Contact channels={siteConfig.contact} />
      </main>
      <Footer brand={siteConfig.brand} channels={siteConfig.contact} />
    </div>
  );
}

export default App;
