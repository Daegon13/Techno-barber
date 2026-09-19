export type Horario = {
  dias: string;
  horas: string;
};

export type Servicio = {
  id: string;
  nombre: string;
  precio: number | null;
  duracion: number | null;
  detallePrecio?: string;
  descripcion: string;
  popular: boolean;
  imagen?: string;
  alt?: string;
};

export type Barbero = {
  nombre: string;
  especialidad: string;
  foto?: string;
  alt?: string;
};

export type Testimonio = {
  nombre: string;
  texto: string;
  rating: number;
};

export type GalleryItem = {
  id: string;
  before: string;
  after: string;
};

export type BarberData = {
  nombre: string;
  concepto: string;
  ciudad: string;
  barrio: string;
  direccion: string;
  whatsapp: string;
  whatsappEsPlaceholder: boolean;
  agendaUrl: string;
  agendaEsPlaceholder: boolean;
  horarios: Horario[];
  servicios: Servicio[];
  barberos: Barbero[];
  testimonios: Testimonio[];
  galeria: GalleryItem[];
  media?: {
    og?: string;
    heroDesktop?: string;
    heroMobile?: string;
    overlayTexture?: string;
    testimonialsBg?: string;
    location?: string;
    turnos?: string;
  };
};
