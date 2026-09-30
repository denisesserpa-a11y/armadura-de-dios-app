export interface ContentBlock {
  type: 'p' | 'h2' | 'verse';
  text: string;
  ref?: string;
}

export interface Chapter {
  id: string;
  number: string;
  title: string;
  summary: string;
  blocks: ContentBlock[];
}

export interface RitualStep {
  id: string;
  label: string;
  detail: string;
}

export interface RitualBlock {
  id: string;
  title: string;
  duration: string;
  steps: RitualStep[];
}

export interface BibleDay {
  dia: number;
  referencia: string;
  capitulos: number;
}

export interface Devotional {
  tema: string;
  titulo: string;
  versiculo: string;
  ref: string;
  reflexion: string;
  pregunta: string;
  oracion: string[];
}
