import { create } from 'zustand';
import type { AppId } from '../types';

export interface MobileNavEntry {
  appId: AppId;
  props?: Record<string, unknown>;
  title: string;
  icon: string;
}

interface MobileNavStore {
  stack: MobileNavEntry[];
  push: (entry: MobileNavEntry) => void;
  pop: () => void;
  reset: () => void;
}

export const useMobileNavStore = create<MobileNavStore>((set) => ({
  stack: [],
  push: (entry) => set((s) => ({ stack: [...s.stack, entry] })),
  pop: () => set((s) => ({ stack: s.stack.slice(0, -1) })),
  reset: () => set({ stack: [] }),
}));
