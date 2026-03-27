import React from 'react';
import { SECTIONS } from '../constants/sections';
import { ContactConfig } from '../types/site.types';
import ContactButton from './ContactButton';

interface ContactProps {
  channels: ContactConfig;
}

const Contact: React.FC<ContactProps> = ({ channels }) => {
  return (
    <section id={SECTIONS.CONTACT} className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-text mb-12">
          Contactanos
        </h2>
        <div className="flex flex-col items-center justify-center space-y-6">
          {channels.whatsapp && <ContactButton type="whatsapp" data={channels.whatsapp} />}
          {channels.instagram && <ContactButton type="instagram" data={channels.instagram} />}
          {channels.tiktok && <ContactButton type="tiktok" data={channels.tiktok} />}
        </div>
      </div>
    </section>
  );
};

export default Contact;
