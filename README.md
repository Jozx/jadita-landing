# Jadita Creaciones — Landing

## Stack
- React 18 + Vite + TypeScript (strict)
- TailwindCSS v3
- Fonts: Playfair Display + DM Sans

## Setup
npm install
cp .env.example .env.local   # fill in your values
npm run dev

## Environment variables
| Variable | Description |
|---|---|
| VITE_WHATSAPP_NUMBER | Phone digits only, no + (e.g. 595981123456) |
| VITE_INSTAGRAM_HANDLE | Without @ (e.g. jaditacreaciones) |
| VITE_TIKTOK_HANDLE | Without @ (e.g. jaditacreaciones) |

## Updating content
→ Text, products, nav: edit src/config/site.config.ts only
→ Images: add WebP to /public/images/, update src in site.config.ts
→ Social links / WhatsApp: edit .env.local only
→ Colors: edit theme.colors in site.config.ts + tailwind.config.ts

## Build
npm run build     # type-check + bundle
npm run preview   # preview production build locally
