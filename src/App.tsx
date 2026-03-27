import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import siteConfig from './config/site.config';
import About from './components/About';
import WhatsAppFloat from './components/ui/WhatsAppFloat';

function App() {
  const resolvedCta = siteConfig.contact.whatsapp;

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
        <About config={siteConfig.about} />
        <Gallery products={siteConfig.products} />
        <HowItWorks />
        <Contact channels={siteConfig.contact} />
      </main>
      <Footer brand={siteConfig.brand} channels={siteConfig.contact} />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
