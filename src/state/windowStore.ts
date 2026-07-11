import { create } from 'zustand';
import type { AppId, WindowState } from '../types';

interface OpenAppOptions {
  title: string;
  icon: string;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  props?: Record<string, unknown>;
  resizable?: boolean;
  /** If true, only one instance of this appId may be open; re-opening focuses it. */
  singleton?: boolean;
}

interface WindowStore {
  windows: WindowState[];
  nextZ: number;
  openApp: (appId: AppId, opts: OpenAppOptions) => string;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  toggleMaximize: (id: string) => void;
  restoreAll: () => void;
  moveWindow: (id: string, x: number, y: number) => void;
  resizeWindow: (id: string, width: number, height: number) => void;
}

let counter = 0;
const genId = () => `win-${Date.now()}-${counter++}`;

// Taskbar height + a little breathing room so title bars are never clipped.
const TASKBAR_H = 34;
const MARGIN = 12;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), Math.max(min, max));
}

function viewportSize() {
  if (typeof window === 'undefined') return { vw: 1024, vh: 768 };
  return { vw: window.innerWidth, vh: window.innerHeight };
}

/**
 * Computes a size that always fits on screen, and a position that starts
 * near-center with a small Windows-XP-style cascade offset, clamped so the
 * whole window (including the title bar) stays fully within the viewport.
 */
function placeWindow(reqWidth: number, reqHeight: number, reqX?: number, reqY?: number) {
  const { vw, vh } = viewportSize();
  const maxW = Math.max(260, vw - MARGIN * 2);
  const maxH = Math.max(180, vh - TASKBAR_H - MARGIN * 2);
  const width = Math.min(reqWidth, maxW);
  const height = Math.min(reqHeight, maxH);

  if (reqX !== undefined && reqY !== undefined) {
    return {
      width,
      height,
      x: clamp(reqX, MARGIN, Math.max(MARGIN, vw - width - MARGIN)),
      y: clamp(reqY, MARGIN, Math.max(MARGIN, vh - TASKBAR_H - height - MARGIN)),
    };
  }

  const n = counter % 8;
  const offset = n * 26;
  const baseX = (vw - width) / 2 + offset;
  const baseY = (vh - TASKBAR_H - height) / 2 + offset;
  return {
    width,
    height,
    x: clamp(baseX, MARGIN, Math.max(MARGIN, vw - width - MARGIN)),
    y: clamp(baseY, MARGIN, Math.max(MARGIN, vh - TASKBAR_H - height - MARGIN)),
  };
}

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: [],
  nextZ: 10,

  openApp: (appId, opts) => {
    const state = get();
    if (opts.singleton) {
      const existing = state.windows.find((w) => w.appId === appId);
      if (existing) {
        set((s) => ({
          windows: s.windows.map((w) =>
            w.id === existing.id ? { ...w, minimized: false } : w
          ),
          nextZ: s.nextZ + 1,
        }));
        get().focusWindow(existing.id);
        return existing.id;
      }
    }
    const id = genId();
    const placed = placeWindow(opts.width ?? 640, opts.height ?? 460, opts.x, opts.y);
    const win: WindowState = {
      id,
      appId,
      title: opts.title,
      icon: opts.icon,
      x: placed.x,
      y: placed.y,
      width: placed.width,
      height: placed.height,
      minimized: false,
      maximized: false,
      zIndex: state.nextZ + 1,
      props: opts.props,
      resizable: opts.resizable ?? true,
    };
    set((s) => ({ windows: [...s.windows, win], nextZ: s.nextZ + 1 }));
    return id;
  },

  closeWindow: (id) => set((s) => ({ windows: s.windows.filter((w) => w.id !== id) })),

  focusWindow: (id) =>
    set((s) => ({
      nextZ: s.nextZ + 1,
      windows: s.windows.map((w) => (w.id === id ? { ...w, zIndex: s.nextZ + 1, minimized: false } : w)),
    })),

  minimizeWindow: (id) =>
    set((s) => ({ windows: s.windows.map((w) => (w.id === id ? { ...w, minimized: true } : w)) })),

  toggleMaximize: (id) =>
    set((s) => ({
      windows: s.windows.map((w) => {
        if (w.id !== id) return w;
        if (w.maximized) {
          const prev = w.prevBounds ?? { x: 120, y: 80, width: 640, height: 460 };
          return { ...w, maximized: false, ...prev };
        }
        return {
          ...w,
          maximized: true,
          prevBounds: { x: w.x, y: w.y, width: w.width, height: w.height },
        };
      }),
    })),

  restoreAll: () => set((s) => ({ windows: s.windows.map((w) => ({ ...w, minimized: false })) })),

  moveWindow: (id, x, y) => {
    const { vw, vh } = viewportSize();
    set((s) => ({
      windows: s.windows.map((w) => {
        if (w.id !== id) return w;
        const clampedX = clamp(x, -w.width + 80, Math.max(0, vw - 80));
        const clampedY = clamp(y, 0, Math.max(0, vh - TASKBAR_H - 30));
        return { ...w, x: clampedX, y: clampedY };
      }),
    }));
  },

  resizeWindow: (id, width, height) =>
    set((s) => ({ windows: s.windows.map((w) => (w.id === id ? { ...w, width, height } : w)) })),
}));
