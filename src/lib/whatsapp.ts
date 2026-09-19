export function buildWhatsAppLink(phoneE164Digits: string, message: string) {
  const phone = phoneE164Digits.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function getSafeWhatsAppHref(
  phoneE164Digits: string,
  message: string,
  isPlaceholder: boolean,
  fallback = "/turnos"
) {
  return isPlaceholder || !phoneE164Digits.replace(/\D/g, "")
    ? fallback
    : buildWhatsAppLink(phoneE164Digits, message);
}

export function getSafeAgendaHref(agendaUrl: string, isPlaceholder: boolean, fallback = "/turnos") {
  return isPlaceholder || !agendaUrl.trim() ? fallback : agendaUrl;
}

export function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}

export function buildBookingMessage(
  template: string,
  service = "[servicio]",
  barber = "[barbero]",
  dateTime = "[fecha/hora]"
) {
  return template
    .replace("[servicio]", service)
    .replace("[barbero]", barber)
    .replace("[fecha/hora]", dateTime);
}

export function formatUYU(value: number) {
  return new Intl.NumberFormat("es-UY", {
    style: "currency",
    currency: "UYU",
    maximumFractionDigits: 0
  }).format(value);
}
