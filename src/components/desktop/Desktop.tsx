import DesktopIcon from './DesktopIcon';
import WindowManager from '../window/WindowManager';
import { useOpenApp } from '../../hooks/useOpenApp';
import { XP_ICONS, ADDED_ICONS } from '../../data/icons';
import './desktop.css';

const SHORTCUTS = [
  { label: 'My Computer', icon: XP_ICONS.myComputer, appId: 'my-computer' as const },
  { label: 'My Portfolio', icon: XP_ICONS.earthFolder, appId: 'my-portfolio' as const },
  { label: 'Command Prompt', icon: ADDED_ICONS.commandPrompt, appId: 'terminal' as const },
  { label: 'Internet Explorer', icon: XP_ICONS.earthFolder, appId: 'internet-explorer' as const },
  { label: 'Music Player', icon: XP_ICONS.myMusic, appId: 'music-player' as const },
  { label: 'Recycle Bin', icon: ADDED_ICONS.recycleBin, appId: 'recycle-bin' as const },
];

export default function Desktop() {
  const openApp = useOpenApp();

  return (
    <div className="desktop" onClick={(e) => e.currentTarget.focus()}>
      <div className="desktop-icons">
        {SHORTCUTS.map((s, i) => (
          <DesktopIcon key={s.appId} label={s.label} icon={s.icon} index={i} onOpen={() => openApp(s.appId)} />
        ))}
      </div>
      <WindowManager />
    </div>
  );
}
