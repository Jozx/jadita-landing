/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_NUMBER: string
  readonly VITE_INSTAGRAM_HANDLE: string
  readonly VITE_TIKTOK_HANDLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
