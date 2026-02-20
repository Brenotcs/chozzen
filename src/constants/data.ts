export interface Particle {
  id: number;
  left: string;
  size: string;
  duration: string;
  delay: string;
  color: string;
}

export interface WaveBar {
  id: number;
  height: string;
  delay: string;
}

export interface Card {
  icon: string;
  title: string;
  text: string;
  accent: string;
}

export interface GalleryItem {
  label: string;
  grad: string;
}

export const PARTICLES: Particle[] = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 7) % 100}%`,
  size: `${(i % 3) + 1.5}px`,
  duration: `${12 + (i % 8)}s`,
  delay: `${(i * 1.3) % 10}s`,
  color:
    i % 3 === 0
      ? 'rgba(130,71,255,0.7)'
      : i % 3 === 1
        ? 'rgba(61,107,240,0.7)'
        : 'rgba(255,255,255,0.4)',
}));

export const WAVE_BARS: WaveBar[] = Array.from({ length: 42 }, (_, i) => ({
  id: i,
  height: `${20 + Math.abs(Math.sin(i * 0.4) * 60)}px`,
  delay: `${(i * 0.08) % 1.2}s`,
}));

export const CARDS: Card[] = [
  {
    icon: '◬',
    title: 'Festas Underground',
    text: 'Sets construídos para ambientes alternativos, com foco em jornada sonora e identidade de pista.',
    accent: '#8247FF',
  },
  {
    icon: '◉',
    title: 'Eventos Privados',
    text: 'Curadoria personalizada para celebrações, corporate e experiências exclusivas.',
    accent: '#3D6BF0',
  },
  {
    icon: '⬡',
    title: 'Open Format',
    text: 'Versatilidade entre gêneros — de Psy a Techno, de Melodic a Progressive.',
    accent: '#8247FF',
  },
  {
    icon: '◈',
    title: 'Produção & Estúdio',
    text: 'Criação de sets autorais e trilhas para projetos audiovisuais e conteúdo digital.',
    accent: '#3D6BF0',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    label: 'Performance — Live Set',
    grad: 'rgba(43,30,75,0.6), rgba(61,107,240,0.2)',
  },
  {
    label: 'Studio',
    grad: 'rgba(130,71,255,0.3), rgba(43,30,75,0.5)',
  },
  {
    label: 'Atmosphere',
    grad: 'rgba(61,107,240,0.3), rgba(10,10,10,0.7)',
  },
];

export const NAV_LINKS = [
  { id: 'bio', label: 'Bio' },
  { id: 'music', label: 'Music' },
  { id: 'experience', label: 'Atuação' },
  { id: 'visual', label: 'Visual' },
  { id: 'contact', label: 'Contact' },
];
