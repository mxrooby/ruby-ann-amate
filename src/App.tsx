import { useEffect, useRef, useState } from 'react';
import Desktop from './components/desktop/Desktop';
import Taskbar from './components/taskbar/Taskbar';
import BootScreen from './components/boot/BootScreen';
import { ShutdownDialog, StandByScreen, TurnOffScreen } from './components/boot/ShutdownScreen';
import MobileApp from './components/mobile/MobileApp';
import { useBootStore } from './state/bootStore';
import { useWindowStore } from './state/windowStore';
import { useSoundStore } from './state/soundStore';
import { useIsMobile } from './hooks/useIsMobile';
import { APP_REGISTRY } from './data/appRegistry';
import './styles/global.css';

const MARGIN = 24;

export default function App() {
  const { phase, setPhase, restart } = useBootStore();
  const [shutdownDialogOpen, setShutdownDialogOpen] = useState(false);
  const [beeFlying, setBeeFlying] = useState(false);
  const isMobile = useIsMobile();
  const openAppRaw = useWindowStore((s) => s.openApp);
  const playError = useSoundStore((s) => s.playError);
  const hasLaidOutRef = useRef(false);

  useEffect(() => {
    const handleShutdown = () => setShutdownDialogOpen(true);
    const handleBee = () => {
      setBeeFlying(true);
      setTimeout(() => setBeeFlying(false), 3000);
    };
    window.addEventListener('rubyxp:shutdown', handleShutdown);
    window.addEventListener('rubyxp:bee', handleBee);
    return () => {
      window.removeEventListener('rubyxp:shutdown', handleShutdown);
      window.removeEventListener('rubyxp:bee', handleBee);
    };
  }, []);

  // A fresh boot (restart) should re-run the startup layout; waking from
  // standby should not re-open windows the person may have closed.
  useEffect(() => {
    if (phase === 'booting') hasLaidOutRef.current = false;
  }, [phase]);

  useEffect(() => {
    if (phase !== 'desktop' || isMobile || hasLaidOutRef.current) return;
    hasLaidOutRef.current = true;

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const portfolioW = Math.min(640, vw - MARGIN * 2);
    const portfolioH = Math.min(440, vh - 34 - MARGIN * 2);
    const cmdW = Math.min(560, Math.round(vw * 0.45));
    const cmdH = Math.min(420, vh - 34 - MARGIN * 2);
    const contactW = Math.min(380, Math.round(vw * 0.3));
    const contactH = Math.min(420, vh - 34 - MARGIN * 2);

    // 1. My Portfolio — centered behind everything (opened first = lowest z-index).
    openAppRaw('my-portfolio', {
      title: APP_REGISTRY['my-portfolio']?.title ?? 'My Portfolio',
      icon: APP_REGISTRY['my-portfolio']?.icon ?? '',
      width: portfolioW,
      height: portfolioH,
      x: Math.round((vw - portfolioW) / 2),
      y: Math.round((vh - 34 - portfolioH) / 2),
      singleton: true,
    });

    // 2. Contact — right side.
    openAppRaw('contact', {
      title: APP_REGISTRY['contact']?.title ?? 'Contact',
      icon: APP_REGISTRY['contact']?.icon ?? '',
      width: contactW,
      height: contactH,
      x: Math.max(MARGIN, vw - MARGIN - contactW),
      y: MARGIN + 16,
      singleton: true,
    });

    // 3. Command Prompt — left side, opened last so it's focused on top.
    openAppRaw('terminal', {
      title: APP_REGISTRY['terminal']?.title ?? 'Command Prompt',
      icon: APP_REGISTRY['terminal']?.icon ?? '',
      width: cmdW,
      height: cmdH,
      x: MARGIN,
      y: MARGIN + 16,
      singleton: true,
    });

    // One open-sound for the startup layout as a whole, rather than stacking
    // three in a row.
    playError();
  }, [phase, isMobile, openAppRaw, playError]);

  function handleShutdownSelect(action: 'standby' | 'restart' | 'turnoff') {
    setShutdownDialogOpen(false);
    if (action === 'standby') setPhase('standby');
    else if (action === 'restart') restart();
    else setPhase('shutting-down');
  }

  return (
    <div className="rubyxp-root">
      {phase === 'booting' && <BootScreen onDone={() => setPhase('desktop')} />}

      {(phase === 'desktop' || phase === 'shutting-down') && (
        <>
          {isMobile ? (
            <MobileApp />
          ) : (
            <>
              <Desktop />
              <Taskbar onShutdown={() => setShutdownDialogOpen(true)} />
            </>
          )}
        </>
      )}

      <ShutdownDialog
        open={shutdownDialogOpen}
        onClose={() => setShutdownDialogOpen(false)}
        onSelect={handleShutdownSelect}
      />

      {phase === 'standby' && <StandByScreen onWake={() => setPhase('desktop')} />}
      {phase === 'shutting-down' && <TurnOffScreen onRestart={restart} />}

      {beeFlying && <div className="bee-flyover">{'\uD83D\uDC1D'}</div>}
    </div>
  );
}
