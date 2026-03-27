export interface BrandConfig {
  name: string;
  tagline: string;
  subtagline: string;
  location: string;
  year: string;
}

export interface ContactChannel {
  url: string;
  label: string;
}

export interface WhatsAppConfig extends ContactChannel {
  number: string;
  message: string;
}

export interface SocialConfig extends ContactChannel {
  handle: string;
}

export interface ContactConfig {
  whatsapp: WhatsAppConfig;
  instagram: SocialConfig;
  tiktok: SocialConfig;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ImageConfig {
  src: string;
  alt: string;
}

export interface ProductConfig {
  id: string;
  name: string;
  description: string;
  whatsappMessage: string;
  image: ImageConfig;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  bg: string;
  text: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  fonts: {
    heading: string;
    body: string;
  };
}

export interface AboutConfig {
  title: string;
  description: string;
  badge: string;
  image: ImageConfig;
}

export interface SiteConfig {
  brand: BrandConfig;
  contact: ContactConfig;
  nav: NavItem[];
  about: AboutConfig;
  hero: {
    image: ImageConfig;
  };
  products: ProductConfig[];
  theme: ThemeConfig;
}
