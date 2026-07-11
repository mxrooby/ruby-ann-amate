import { create } from 'zustand';

export type PowerPhase = 'booting' | 'desktop' | 'standby' | 'shutting-down' | 'off';

interface BootStore {
  phase: PowerPhase;
  setPhase: (phase: PowerPhase) => void;
  restart: () => void;
  turnOn: () => void;
}

export const useBootStore = create<BootStore>((set) => ({
  phase: 'booting',
  setPhase: (phase) => set({ phase }),
  restart: () => set({ phase: 'booting' }),
  turnOn: () => set({ phase: 'booting' }),
}));
