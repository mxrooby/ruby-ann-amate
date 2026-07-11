import type { AppId } from '../types';
import { XP_ICONS, ADDED_ICONS } from './icons';

export interface AppRegistryEntry {
  title: string;
  icon: string;
  width?: number;
  height?: number;
  singleton?: boolean;
  resizable?: boolean;
}

export const APP_REGISTRY: Partial<Record<AppId, AppRegistryEntry>> = {
  terminal: { title: 'Command Prompt', icon: ADDED_ICONS.commandPrompt, width: 640, height: 420, singleton: true },
  'my-computer': { title: 'My Computer', icon: XP_ICONS.myComputer, width: 560, height: 380, singleton: true },
  'my-portfolio': { title: 'My Portfolio', icon: XP_ICONS.earthFolder, width: 640, height: 440, singleton: true },
  projects: { title: 'Projects', icon: XP_ICONS.closedFolder, width: 620, height: 440, singleton: true },
  'project-detail': { title: 'Project', icon: XP_ICONS.closedFolder, width: 900, height: 560 },
  experience: { title: 'Experience', icon: XP_ICONS.closedFolder, width: 620, height: 440, singleton: true },
  'experience-detail': { title: 'Experience', icon: XP_ICONS.closedFolder, width: 900, height: 560 },
  'tech-stack': { title: 'Tech Stack', icon: XP_ICONS.controlPanel, width: 620, height: 480, singleton: true },
  gallery: { title: 'Gallery', icon: XP_ICONS.myPictures, width: 680, height: 480, singleton: true },
  random: { title: 'Random', icon: XP_ICONS.myPictures, width: 680, height: 480, singleton: true },
  notes: { title: 'Notes', icon: XP_ICONS.myDocuments, width: 480, height: 400, singleton: true },
  notepad: { title: 'Notepad', icon: XP_ICONS.myDocuments, width: 480, height: 400, resizable: true },
  'music-player': { title: 'Music Player', icon: XP_ICONS.myMusic, width: 400, height: 470, singleton: true },
  movies: { title: 'Movie Library', icon: XP_ICONS.myVideos, width: 660, height: 480, singleton: true },
  'movie-detail': { title: 'Movie', icon: XP_ICONS.myVideos, width: 460, height: 520 },
  resume: { title: 'Resume.pdf', icon: XP_ICONS.myDocuments, width: 620, height: 620, singleton: true },
  contact: { title: 'Contact', icon: XP_ICONS.networkDocuments, width: 420, height: 420, singleton: true },
  'internet-explorer': { title: 'Internet Explorer', icon: XP_ICONS.earthFolder, width: 720, height: 520, singleton: true },
  'recycle-bin': { title: 'Recycle Bin', icon: ADDED_ICONS.recycleBin, width: 480, height: 400, singleton: true },
  'image-preview': { title: 'Image Preview', icon: XP_ICONS.myPictures, width: 560, height: 480 },
};
