export const buildWhatsAppUrl = (number: string, message: string): string =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

export const buildProductWhatsAppUrl = (
  number: string,
  message: string
): string =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
