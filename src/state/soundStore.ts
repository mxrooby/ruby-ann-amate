import { create } from 'zustand';

interface SoundStore {
  muted: boolean;
  toggleMute: () => void;
  playClick: () => void;
  playStartup: () => void;
  playShutdown: () => void;
  playError: () => void;
}

const AUDIO = {
  startup: '/assets/audio/startup.mp3',
  shutdown: '/assets/audio/shutdown.mp3',
  error: '/assets/audio/error-notif.mp3',
};

function play(src: string, muted: boolean, volume = 0.5) {
  if (muted) return;
  try {
    const audio = new Audio(src);
    audio.volume = volume;
    void audio.play().catch(() => {
      /* autoplay may be blocked before first user gesture; fail silently */
    });
  } catch {
    /* ignore playback errors */
  }
}

export const useSoundStore = create<SoundStore>((set, get) => ({
  muted: false,
  toggleMute: () => set((s) => ({ muted: !s.muted })),
  // No dedicated "click.mp3" asset was provided; a short synthetic blip keeps the
  // UI-click requirement (TECHNICAL_REQUIREMENTS.md) without inventing a fake file.
  playClick: () => {
    if (get().muted) return;
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.value = 620;
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.06);
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } catch {
      /* ignore */
    }
  },
  playStartup: () => play(AUDIO.startup, get().muted, 0.5),
  playShutdown: () => play(AUDIO.shutdown, get().muted, 0.5),
  playError: () => play(AUDIO.error, get().muted, 0.5),
}));
