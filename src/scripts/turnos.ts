type Servicio = {
  nombre: string;
};

function $(selector: string) {
  const element = document.querySelector(selector);
  if (!element) throw new Error(`Missing element: ${selector}`);
  return element as HTMLElement;
}

function encodeWhatsApp(phone: string, text: string) {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

function buildMessage(template: string, service?: string, date?: string, time?: string) {
  const selectedService = service ?? "[servicio]";
  const dateTime = date && time ? `${date} a las ${time}` : "[fecha/hora]";
  return template
    .replace("[servicio]", selectedService)
    .replace("[barbero]", "[barbero]")
    .replace("[fecha/hora]", dateTime);
}

function generateTimes(start = "10:00", end = "20:00") {
  const toMinutes = (value: string) => {
    const [hours, minutes] = value.split(":").map(Number);
    return hours * 60 + minutes;
  };
  const pad = (value: number) => String(value).padStart(2, "0");
  const format = (minutes: number) => `${pad(Math.floor(minutes / 60))}:${pad(minutes % 60)}`;

  const times: string[] = [];
  for (let current = toMinutes(start); current <= toMinutes(end); current += 30) {
    times.push(format(current));
  }
  return times;
}

(function init() {
  const config = $("#turnosConfig") as HTMLDivElement;
  const phone = config.dataset.whatsapp ?? "";
  const whatsappIsPlaceholder = config.dataset.whatsappPlaceholder === "true";
  const messageTemplate = config.dataset.messageTemplate ?? "Hola, quiero reservar. Me interesa [servicio] con [barbero] para [fecha/hora].";
  const services = JSON.parse(config.dataset.services ?? "[]") as Servicio[];
  const preselected = (config.dataset.preselected ?? "").trim();

  const serviceButtons = Array.from(document.querySelectorAll(".service-btn")) as HTMLButtonElement[];
  const selectedServiceElement = $("#selectedService");
  const selectedDayElement = $("#selectedDay");
  const selectedTimeElement = $("#selectedTime");
  const whatsappCta = $("#waCta") as HTMLAnchorElement;
  const dialog = $("#slotsDialog") as HTMLDialogElement;
  const openSlots = $("#openSlots") as HTMLButtonElement;
  const closeSlots = $("#closeSlots") as HTMLButtonElement;
  const daysList = $("#daysList");
  const timesList = $("#timesList");
  const previewMessage = $("#previewMsg");

  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const times = generateTimes();
  let selectedService: string | undefined;
  let selectedDay: string | undefined;
  let selectedTime: string | undefined;

  function refresh() {
    const ready = Boolean(selectedService && selectedDay && selectedTime);
    const message = buildMessage(messageTemplate, selectedService, selectedDay, selectedTime);
    previewMessage.textContent = message;
    if (ready && !whatsappIsPlaceholder) {
      whatsappCta.href = encodeWhatsApp(phone, message);
      whatsappCta.target = "_blank";
      whatsappCta.rel = "noopener noreferrer";
      whatsappCta.removeAttribute("aria-disabled");
    } else if (ready) {
      whatsappCta.href = "#previewMsg";
      whatsappCta.removeAttribute("target");
      whatsappCta.removeAttribute("rel");
      whatsappCta.removeAttribute("aria-disabled");
    } else {
      whatsappCta.removeAttribute("href");
      whatsappCta.setAttribute("aria-disabled", "true");
    }
    whatsappCta.classList.toggle("opacity-60", !ready);
    whatsappCta.classList.toggle("pointer-events-none", !ready);
  }

  whatsappCta.addEventListener("click", async (event) => {
    if (!whatsappIsPlaceholder || !selectedService || !selectedDay || !selectedTime) return;
    event.preventDefault();
    const message = buildMessage(messageTemplate, selectedService, selectedDay, selectedTime);
    try {
      await navigator.clipboard.writeText(message);
      whatsappCta.textContent = "Mensaje copiado";
    } catch {
      previewMessage.scrollIntoView({ behavior: "smooth", block: "center" });
      whatsappCta.textContent = "Mensaje listo para copiar";
    }
  });

  function setSelectedService(name: string) {
    selectedService = name;
    selectedServiceElement.textContent = name;
    for (const button of serviceButtons) {
      const isSelected = button.dataset.service === name;
      button.classList.toggle("ring-2", isSelected);
      button.classList.toggle("ring-cyanA-500/40", isSelected);
    }
    refresh();
  }

  days.forEach((day) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition text-left";
    button.textContent = day;
    button.addEventListener("click", () => {
      selectedDay = day;
      selectedDayElement.textContent = day;
      Array.from(daysList.children).forEach((child) => child.classList.remove("ring-2", "ring-cyanA-500/40"));
      button.classList.add("ring-2", "ring-cyanA-500/40");
      refresh();
    });
    daysList.appendChild(button);
  });

  times.forEach((time) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition";
    button.textContent = time;
    button.addEventListener("click", () => {
      selectedTime = time;
      selectedTimeElement.textContent = time;
      Array.from(timesList.children).forEach((child) => child.classList.remove("ring-2", "ring-cyanA-500/40"));
      button.classList.add("ring-2", "ring-cyanA-500/40");
      refresh();
    });
    timesList.appendChild(button);
  });

  openSlots.addEventListener("click", () => dialog.showModal());
  closeSlots.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  serviceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.dataset.service ?? "";
      if (name) setSelectedService(name);
      dialog.showModal();
    });
  });

  if (preselected && services.some((service) => service.nombre.toLowerCase() === preselected.toLowerCase())) {
    setSelectedService(preselected);
  }

  refresh();
})();
