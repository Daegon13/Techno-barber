export function buildWhatsAppLink(phone: string, message: string) {
  if (!/^5989\d{7}$/.test(phone)) throw new Error('Número de WhatsApp uruguayo inválido');
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
export function buildBookingMessage(brand: string, service?: string, date?: string, period?: string) {
  const request = service ? `reservar un turno para ${service}` : 'reservar un turno';
  const preference = date ? ` Me gustaría el ${date}${period ? ` por la ${period}` : ''}.` : '';
  return `Hola, quiero ${request} en ${brand}.${preference} ¿Qué disponibilidad tienen?`;
}
export function formatUYU(value: number) {
  return new Intl.NumberFormat('es-UY', {style: 'currency', currency: 'UYU', maximumFractionDigits: 0}).format(value);
}
