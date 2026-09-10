export type Servicio = {
  id: string; nombre: string; descripcion: string;
  precio?: number | null; duracion?: number | null; destacado?: boolean;
  imagen?: string; alt?: string;
};
export type Barbero = { nombre: string; especialidad: string; foto?: string; alt?: string };
export type Testimonio = { nombre: string; texto: string; rating: number; sourceUrl: string };
export type GalleryItem = { id: string; imagen: string; alt: string; sourceUrl: string };
export type BarberData = {
  nombre: string; ciudad: string; direccion: string; telefono: string; whatsapp: string;
  instagram: string; maps: string; demo: boolean;
  horarios: { dia: string; abre: string; cierra: string }[] | null;
  servicios: Servicio[]; barberos: Barbero[]; testimonios: Testimonio[]; galeria: GalleryItem[];
  branding: { logoMark?: string; logoWordmark?: string };
  media: { heroDesktop?: string; heroMobile?: string; overlayTexture?: string; location?: string; turnos?: string; og?: string };
};
