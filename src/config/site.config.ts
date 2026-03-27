import { SiteConfig } from '../types/site.types';
import { env } from './env';
import { buildWhatsAppUrl } from '../utils/contact.utils';

const whatsappMessage = "Hola! Quiero consultar sobre un pedido";

const siteConfig = {
  brand: {
    name: "Jadita Creaciones",
    tagline: "Regalos que dejan huella",
    subtagline: "Sublimación y personalización en San Lorenzo, Paraguay",
    location: "San Lorenzo, Paraguay",
    year: "2025",
  },

  contact: {
    whatsapp: {
      number: env.whatsappNumber,
      message: whatsappMessage,
      url: buildWhatsAppUrl(env.whatsappNumber, whatsappMessage),
      label: "Pedir por WhatsApp",
    },
    instagram: {
      handle: env.instagramHandle,
      url: `https://instagram.com/${env.instagramHandle}`,
      label: "Seguinos en Instagram",
    },
    tiktok: {
      handle: env.tiktokHandle,
      url: `https://tiktok.com/${env.tiktokHandle}`,
      label: "Miranos en TikTok",
    },
  },

  nav: [
    { label: "Inicio",    href: "#inicio" },
    { label: "Nosotras",  href: "#nosotras" },
    { label: "Productos", href: "#productos" },
    { label: "Contacto",  href: "#contacto" },
  ],

  about: {
    title: "Quiénes somos",
    description: `Somos un emprendimiento familiar de San Lorenzo, 
      Paraguay. Nos especializamos en sublimación y personalización 
      de productos para particulares y empresas. 
      Cada pieza es única, hecha con dedicación.`,
    badge: "📍 San Lorenzo, Paraguay",
    image: {
      src: "/images/hero.webp", // TODO: replace with team/workshop photo
      alt: "Equipo Jadita Creaciones en el taller",
    }
  },

  hero: {
    image: {
      src: "/images/hero.webp",
      alt: "Taller Jadita Creaciones",
    },
  },

  products: [
    {
      id: "tazas",
      name: "Tazas sublimadas",
      description: "Personalizadas con tu diseño o foto favorita",
      whatsappMessage: 'Hola! Me interesa consultar sobre Tazas sublimadas 🎨',
      image: {
        src: "/images/tazas.webp",
        alt: "Tazas sublimadas Jadita",
      },
    },
    {
      id: "remeras",
      name: "Remeras personalizadas",
      description: "Algodón y poliéster en todos los talles",
      whatsappMessage: 'Hola! Me interesa consultar sobre Remeras personalizadas 👕',
      image: {
        src: "/images/remeras.webp",
        alt: "Remeras Jadita",
      },
    },
    {
      id: "chopperas",
      name: "Chopperas",
      description: "Ideales para eventos y regalos únicos",
      whatsappMessage: 'Hola! Me interesa consultar sobre Chopperas 🍺',
      image: {
        src: "/images/chopperas.webp",
        alt: "Chopperas Jadita",
      },
    },
    {
      id: "empresariales",
      name: "Regalos empresariales",
      description: "Kits corporativos con tu marca",
      whatsappMessage: 'Hola! Me interesa consultar sobre Regalos empresariales 💼',
      image: {
        src: "/images/empresariales.webp",
        alt: "Regalos empresariales Jadita",
      },
    },
  ],

  theme: {
    fonts: {
      heading: "'Playfair Display', serif",
      body: "'DM Sans', sans-serif",
    },
    colors: {
      primary:   "#C4724A",
      secondary: "#E8D5C0",
      accent:    "#8B3A2A",
      bg:        "#FAF6F1",
      text:      "#2C1A10",
    },
  },
} satisfies SiteConfig;

export default siteConfig;
