export type AppId =
  | 'terminal'
  | 'my-computer'
  | 'my-portfolio'
  | 'projects'
  | 'project-detail'
  | 'experience'
  | 'experience-detail'
  | 'tech-stack'
  | 'gallery'
  | 'random'
  | 'notes'
  | 'notepad'
  | 'music-player'
  | 'movies'
  | 'movie-detail'
  | 'resume'
  | 'contact'
  | 'internet-explorer'
  | 'recycle-bin'
  | 'image-preview';

export interface WindowState {
  id: string;
  appId: AppId;
  title: string;
  icon: string;
  x: number;
  y: number;
  width: number;
  height: number;
  minimized: boolean;
  maximized: boolean;
  prevBounds?: { x: number; y: number; width: number; height: number };
  zIndex: number;
  props?: Record<string, unknown>;
  resizable: boolean;
}

export interface ProjectPreview {
  file: string;
  type: 'image' | 'gif';
  device: 'phone' | 'laptop';
}

export interface Project {
  id: string;
  title: string;
  role: string;
  year: string;
  overview: string;
  responsibilities: string[];
  technologies: string[];
  github: string | null;
  githubNote?: string;
  takeaway: string;
  previews: ProjectPreview[];
}

export interface ExperienceEntry {
  id: string;
  company: string;
  position: string;
  duration: string;
  overview: string;
  responsibilities: string[];
  technologies: string[];
  github: string | null;
  githubNote?: string;
  takeaway: string;
  previews: ProjectPreview[];
  logo: string;
}

export interface MovieEntry {
  id: string;
  title: string;
  year: string;
  poster: string;
  genre: string;
  director: string;
  note?: string;
}

export interface NoteEntry {
  id: string;
  filename: string;
  title: string;
  content: string;
}

export interface GalleryImage {
  id: string;
  filename: string;
  path: string;
}

export interface TechItem {
  name: string;
  category: string;
  simpleIconSlug?: string;
  localIcon?: string;
  color?: string;
}
