import type { AppId } from '../../types';
import { useOpenApp } from '../../hooks/useOpenApp';
import { XP_ICONS, ADDED_ICONS } from '../../data/icons';
import './startmenu.css';

interface StartMenuProps {
  onClose: () => void;
  onShutdown: () => void;
}

const PROGRAMS = [
  { label: 'My Portfolio', icon: XP_ICONS.earthFolder, appId: 'my-portfolio' as const },
  { label: 'Command Prompt', icon: ADDED_ICONS.commandPrompt, appId: 'terminal' as const },
  { label: 'Internet Explorer', icon: XP_ICONS.earthFolder, appId: 'internet-explorer' as const },
  { label: 'Music Player', icon: XP_ICONS.myMusic, appId: 'music-player' as const },
  { label: 'Resume', icon: XP_ICONS.myDocuments, appId: 'resume' as const },
  { label: 'Contact', icon: XP_ICONS.networkDocuments, appId: 'contact' as const },
];

export default function StartMenu({ onClose, onShutdown }: StartMenuProps) {
  const openApp = useOpenApp();

  const launch = (appId: AppId) => {
    openApp(appId);
    onClose();
  };

  return (
    <div className="start-menu-backdrop" onClick={onClose}>
      <div className="start-menu" onClick={(e) => e.stopPropagation()}>
        <div className="start-menu-header">
          <img src="/assets/branding/personal-logo.svg" alt="" className="start-menu-avatar" />
          <span>Ruby Ann S. Amate</span>
        </div>
        <div className="start-menu-body">
          <div className="start-menu-column">
            {PROGRAMS.map((p) => (
              <button key={p.appId} className="start-menu-item" onClick={() => launch(p.appId)}>
                <img src={p.icon} alt="" />
                <span>{p.label}</span>
              </button>
            ))}
          </div>
          <div className="start-menu-column right">
            <button className="start-menu-item" onClick={() => launch('my-computer')}>
              <img src={XP_ICONS.myComputer} alt="" />
              <span>My Computer</span>
            </button>
            <button className="start-menu-item" onClick={() => launch('my-portfolio')}>
              <img src={XP_ICONS.myDocuments} alt="" />
              <span>My Documents</span>
            </button>
            <button className="start-menu-item" onClick={() => { openApp('recycle-bin'); onClose(); }}>
              <img src={ADDED_ICONS.recycleBin} alt="" />
              <span>Recycle Bin</span>
            </button>
            <div className="start-menu-spacer" />
            <button
              className="start-menu-item"
              onClick={() => {
                onClose();
                onShutdown();
              }}
            >
              <img src={ADDED_ICONS.shutdown} alt="" />
              <span>Shut Down...</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
