import type { AppId } from '../../types';
import { XP_ICONS, ADDED_ICONS } from '../../data/icons';
import './mobile.css';

interface MobileAppShortcut {
  label: string;
  icon: string;
  appId: AppId;
  props?: Record<string, unknown>;
}

const SHORTCUTS: MobileAppShortcut[] = [
  { label: 'About Me', icon: ADDED_ICONS.commandPrompt, appId: 'terminal' },
  { label: 'Projects', icon: XP_ICONS.closedFolder, appId: 'projects' },
  { label: 'Experience', icon: XP_ICONS.closedFolder, appId: 'experience' },
  { label: 'Tech Stack', icon: XP_ICONS.controlPanel, appId: 'tech-stack' },
  { label: 'Resume', icon: XP_ICONS.myDocuments, appId: 'resume' },
  { label: 'Gallery', icon: XP_ICONS.myPictures, appId: 'gallery' },
  { label: 'Random', icon: XP_ICONS.myPictures, appId: 'random' },
  { label: 'Notes', icon: XP_ICONS.myDocuments, appId: 'notes' },
  { label: 'Music Player', icon: XP_ICONS.myMusic, appId: 'music-player' },
  { label: 'Movies', icon: XP_ICONS.myVideos, appId: 'movies' },
  { label: 'GitHub', icon: XP_ICONS.earthFolder, appId: 'internet-explorer', props: { url: 'https://github.com/mxrooby' } },
  { label: 'Gmail', icon: XP_ICONS.networkDocuments, appId: 'contact' },
  { label: 'Instagram', icon: XP_ICONS.earthFolder, appId: 'internet-explorer', props: { url: 'https://instagram.com/mxrooby' } },
  { label: 'LinkedIn', icon: XP_ICONS.earthFolder, appId: 'internet-explorer', props: { url: 'https://www.linkedin.com/in/rubyannamate19/' } },
  { label: 'Contact', icon: XP_ICONS.networkDocuments, appId: 'contact' },
];

interface MobileHomeScreenProps {
  onOpen: (appId: AppId, props?: Record<string, unknown>, title?: string) => void;
}

export default function MobileHomeScreen({ onOpen }: MobileHomeScreenProps) {
  return (
    <div className="mobile-home">
      <div className="mobile-home-header">
        <img src="/assets/branding/personal-logo.svg" alt="" />
        <div>
          <div className="mobile-home-title">RubyXP</div>
          <div className="mobile-home-subtitle">Ruby Ann S. Amate</div>
        </div>
      </div>
      <div className="mobile-app-grid">
        {SHORTCUTS.map((s, i) => (
          <button
            key={`${s.appId}-${i}`}
            className="mobile-app-icon"
            onClick={() => onOpen(s.appId, s.props, s.label)}
          >
            <img src={s.icon} alt="" />
            <span>{s.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
