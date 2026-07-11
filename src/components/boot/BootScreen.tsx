import { useEffect, useState } from 'react';
import { useSoundStore } from '../../state/soundStore';
import './boot.css';

interface BootScreenProps {
  onDone: () => void;
}

export default function BootScreen({ onDone }: BootScreenProps) {
  const [stage, setStage] = useState<'logo' | 'loading'>('logo');
  const playStartup = useSoundStore((s) => s.playStartup);

  useEffect(() => {
    playStartup();
    const t1 = setTimeout(() => setStage('loading'), 900);
    const t2 = setTimeout(onDone, 2600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="boot-screen">
      <div className="boot-logo">
        <img src="/assets/branding/personal-logo.svg" alt="RubyXP" />
        <span className="boot-title">Ruby Ann S. Amate</span>
      </div>
      {stage === 'loading' && (
        <div className="boot-bar">
          <div className="boot-bar-fill" />
        </div>
      )}
    </div>
  );
}
