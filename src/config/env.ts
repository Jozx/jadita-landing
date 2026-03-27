const getEnv = (key: string): string => {
  const value = import.meta.env[key];
  if (!value && import.meta.env.PROD) {
    throw new Error(`Missing required env variable: ${key}`);
  }
  return value ?? '';
};

export const env = {
  whatsappNumber:    getEnv('VITE_WHATSAPP_NUMBER'),
  instagramHandle:   getEnv('VITE_INSTAGRAM_HANDLE'),
  tiktokHandle:      getEnv('VITE_TIKTOK_HANDLE'),
} as const;
