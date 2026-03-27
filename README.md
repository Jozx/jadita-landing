# Jadita Creaciones — Landing

## Stack
- React 18 + Vite + TypeScript (strict)
- TailwindCSS v3
- Fonts: Playfair Display + DM Sans

## Instalación desde cero (Paso a paso)

Si no tienes experiencia previa o no tienes las herramientas instaladas, sigue estos pasos:

### 1. Instalar Git
Git es necesario para descargar el código.
- Descarga e instala desde: [git-scm.com](https://git-scm.com/) (elige la versión para Windows).
- Sigue el instalador con las opciones por defecto.

### 2. Instalar Node.js
Node.js es el motor que ejecuta el proyecto.
- Descarga la versión **LTS** (Recomendada para la mayoría) desde: [nodejs.org](https://nodejs.org/).
- Una vez instalado, abre una terminal (o PowerShell) y escribe `node -v` para confirmar que funciona.

### 3. Descargar el Proyecto
- **Opción A (Recomendada)**: Abre la terminal en la carpeta donde quieras el proyecto y escribe:
  ```bash
  git clone https://github.com/tu-usuario/jadita-landing.git
  ```
- **Opción B**: Descarga el código como ZIP desde el botón verde "Code" y extráelo en una carpeta.

### 4. Instalación de dependencias
Abre una terminal **dentro de la carpeta del proyecto** y ejecuta:
```bash
npm install
```
*Esto descargará todas las librerías necesarias.*

### 5. Configuración del entorno
Copia el archivo de ejemplo para crear tu configuración local:
```bash
cp .env.example .env.local
```
Luego, abre el archivo `.env.local` con un editor de texto (como Notepad o VS Code) y completa los valores.

| Variable | Description |
|---|---|
| VITE_WHATSAPP_NUMBER | Phone digits only, no + (e.g. 595981123456) |
| VITE_INSTAGRAM_HANDLE | Without @ (e.g. jaditacreaciones) |
| VITE_TIKTOK_HANDLE | Without @ (e.g. jaditacreaciones) |

### 6. ¡Listo para rodar!
Para iniciar el servidor local, ejecuta:
```bash
npm run dev
```
La terminal te dará una dirección (usualmente `http://localhost:5173`). Ábrela en tu navegador para ver la página.

## Actualización de contenido
→ Text, products, nav: edit src/config/site.config.ts only
→ Images: add WebP to /public/images/, update src in site.config.ts
→ Social links / WhatsApp: edit .env.local only
→ Colors: edit theme.colors in site.config.ts + tailwind.config.ts

## Build
npm run build     # type-check + bundle
npm run preview   # preview production build locally
