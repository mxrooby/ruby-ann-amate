import { useEffect, useState } from 'react';
import { useWindowStore } from '../../state/windowStore';
import { useSoundStore } from '../../state/soundStore';
import StartMenu from './StartMenu';
import './taskbar.css';

interface TaskbarProps {
  onShutdown: () => void;
}

export default function Taskbar({ onShutdown }: TaskbarProps) {
  const windows = useWindowStore((s) => s.windows);
  const focusWindow = useWindowStore((s) => s.focusWindow);
  const minimizeWindow = useWindowStore((s) => s.minimizeWindow);
  const { muted, toggleMute, playClick } = useSoundStore();
  const [startOpen, setStartOpen] = useState(false);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(t);
  }, []);

  const topZ = windows.reduce((max, w) => (w.zIndex > max ? w.zIndex : max), -1);

  return (
    <>
      {startOpen && (
        <StartMenu onClose={() => setStartOpen(false)} onShutdown={onShutdown} />
      )}
      <div className="taskbar">
        <button
          className={`start-button ${startOpen ? 'active' : ''}`}
          onClick={() => {
            playClick();
            setStartOpen((v) => !v);
          }}
        >
          <img src="/assets/branding/personal-logo.svg" alt="" />
          start
        </button>
        <div className="taskbar-divider" />
        <div className="taskbar-tasks">
          {windows.map((w) => (
            <button
              key={w.id}
              className={`taskbar-task ${!w.minimized && w.zIndex === topZ ? 'focused' : ''}`}
              onClick={() => {
                if (!w.minimized && w.zIndex === topZ) {
                  minimizeWindow(w.id);
                } else {
                  focusWindow(w.id);
                }
              }}
            >
              <img src={w.icon} alt="" />
              <span>{w.title}</span>
            </button>
          ))}
        </div>
        <div className="taskbar-clock">
          <button className="mute-toggle" onClick={toggleMute} title={muted ? 'Unmute' : 'Mute'}>
            {muted ? '\ud83d\udd07' : '\ud83d\udd0a'}
          </button>
          <span>
            {now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </>
  );
}
