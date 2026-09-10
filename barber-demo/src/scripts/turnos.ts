import { buildWhatsAppLink, buildBookingMessage } from '../lib/whatsapp';
const root = document.querySelector<HTMLElement>('#turnosConfig');
if (root) {
  const service = document.querySelector<HTMLSelectElement>('#bookingService')!;
  const date = document.querySelector<HTMLInputElement>('#bookingDate')!;
  const period = document.querySelector<HTMLSelectElement>('#bookingPeriod')!;
  const cta = document.querySelector<HTMLAnchorElement>('#waCta')!;
  const preview = document.querySelector<HTMLElement>('#previewMsg')!;
  const error = document.querySelector<HTMLElement>('#bookingError')!;
  const brand = root.dataset.brand!;
  const phone = root.dataset.whatsapp!;
  const today = new Intl.DateTimeFormat('en-CA', {timeZone: 'America/Montevideo', year: 'numeric', month: '2-digit', day: '2-digit'}).format(new Date());
  date.min = today;
  const pre = new URLSearchParams(window.location.search).get('servicio');
  if (pre && Array.from(service.options).some(option => option.value === pre)) service.value = pre;
  function refresh() {
    const invalid = !!date.value && date.value < today;
    error.textContent = invalid ? 'Elegí una fecha de hoy en adelante. Podés consultar al local sin incluir la fecha.' : '';
    const validDate = !invalid && date.value ? date.value.split('-').reverse().join('/') : undefined;
    const name = service.selectedOptions[0]?.dataset.name;
    let message = buildBookingMessage(brand, name, validDate, period.value);
    if (!date.value && period.value) message = `Hola, quiero reservar${name ? ` un turno para ${name}` : ' un turno'} en ${brand}. Prefiero la ${period.value}. ¿Qué disponibilidad tienen?`;
    cta.href = buildWhatsAppLink(phone, message);
    preview.textContent = message;
  }
  [service, date, period].forEach(el => el.addEventListener('change', refresh));
  document.querySelector('#bookingPreferences')?.addEventListener('submit', event => event.preventDefault());
  refresh();
}
