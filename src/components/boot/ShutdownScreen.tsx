import { useEffect, useState } from 'react';
import { useSoundStore } from '../../state/soundStore';
import type { PowerPhase } from '../../state/bootStore';
import './shutdown.css';

interface ShutdownDialogProps {
  open: boolean;
  onClose: () => void;
  onSelect: (action: 'standby' | 'restart' | 'turnoff') => void;
}

export function ShutdownDialog({ open, onClose, onSelect }: ShutdownDialogProps) {
  if (!open) return null;
  return (
    <div className="shutdown-backdrop" onClick={onClose}>
      <div className="shutdown-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="shutdown-title">Turn off computer</div>
        <div className="shutdown-options">
          <button className="shutdown-option" onClick={() => onSelect('standby')}>
            <div className="shutdown-icon standby">&#9210;</div>
            <span>Stand By</span>
          </button>
          <button className="shutdown-option" onClick={() => onSelect('turnoff')}>
            <div className="shutdown-icon turnoff">&#9099;</div>
            <span>Turn Off</span>
          </button>
          <button className="shutdown-option" onClick={() => onSelect('restart')}>
            <div className="shutdown-icon restart">&#8635;</div>
            <span>Restart</span>
          </button>
        </div>
        <button className="xp-button shutdown-cancel" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

interface StandByScreenProps {
  onWake: () => void;
}

export function StandByScreen({ onWake }: StandByScreenProps) {
  return (
    <div className="standby-screen" onClick={onWake}>
      <p>Portfolio sleeping...</p>
      <span>Click anywhere to wake up.</span>
    </div>
  );
}

interface TurnOffScreenProps {
  onRestart: () => void;
}

export function TurnOffScreen({ onRestart }: TurnOffScreenProps) {
  const [visible, setVisible] = useState(false);
  const playShutdown = useSoundStore((s) => s.playShutdown);

  useEffect(() => {
    playShutdown();
    const t = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="turnoff-screen">
      {visible && (
        <div className="turnoff-message">
          <p>Thank you for visiting my portfolio.</p>
          <p className="turnoff-signature">&mdash; Ruby Ann S. Amate</p>
          <button className="xp-button" onClick={onRestart}>
            Start Portfolio Again
          </button>
        </div>
      )}
    </div>
  );
}

export function shouldShowPhase(phase: PowerPhase) {
  return phase === 'standby' || phase === 'off';
}
