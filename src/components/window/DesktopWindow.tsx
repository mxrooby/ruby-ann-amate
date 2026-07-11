import { useRef, type PointerEvent as ReactPointerEvent, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { WindowState } from '../../types';
import { useWindowStore } from '../../state/windowStore';
import { useSoundStore } from '../../state/soundStore';
import './window.css';

interface DesktopWindowProps {
  win: WindowState;
  children: ReactNode;
  /** Renders in place of the default title-bar icon+text row (rarely needed). */
  headerExtra?: ReactNode;
}

const MIN_WIDTH = 320;
const MIN_HEIGHT = 220;

export default function DesktopWindow({ win, children }: DesktopWindowProps) {
  const { closeWindow, focusWindow, minimizeWindow, toggleMaximize, moveWindow, resizeWindow } =
    useWindowStore();
  const playClick = useSoundStore((s) => s.playClick);
  const dragRef = useRef<{ startX: number; startY: number; winX: number; winY: number } | null>(null);
  const resizeRef = useRef<{ startX: number; startY: number; width: number; height: number } | null>(
    null
  );

  if (win.minimized) return null;

  const handleTitlePointerDown = (e: ReactPointerEvent) => {
    if (win.maximized) return;
    focusWindow(win.id);
    dragRef.current = { startX: e.clientX, startY: e.clientY, winX: win.x, winY: win.y };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handleTitlePointerMove = (e: ReactPointerEvent) => {
    if (!dragRef.current) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    moveWindow(win.id, Math.max(0, dragRef.current.winX + dx), Math.max(0, dragRef.current.winY + dy));
  };

  const handleTitlePointerUp = (e: ReactPointerEvent) => {
    dragRef.current = null;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const handleResizePointerDown = (e: ReactPointerEvent) => {
    e.stopPropagation();
    focusWindow(win.id);
    resizeRef.current = { startX: e.clientX, startY: e.clientY, width: win.width, height: win.height };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handleResizePointerMove = (e: ReactPointerEvent) => {
    if (!resizeRef.current) return;
    const dx = e.clientX - resizeRef.current.startX;
    const dy = e.clientY - resizeRef.current.startY;
    resizeWindow(
      win.id,
      Math.max(MIN_WIDTH, resizeRef.current.width + dx),
      Math.max(MIN_HEIGHT, resizeRef.current.height + dy)
    );
  };

  const handleResizePointerUp = (e: ReactPointerEvent) => {
    resizeRef.current = null;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const style = win.maximized
    ? { left: 0, top: 0, width: '100%', height: 'calc(100% - 34px)', zIndex: win.zIndex }
    : { left: win.x, top: win.y, width: win.width, height: win.height, zIndex: win.zIndex };

  return (
    <motion.div
      className="xp-window"
      style={style}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.14, ease: 'easeOut' }}
      onPointerDown={() => focusWindow(win.id)}
    >
      <div
        className="xp-titlebar"
        onDoubleClick={() => toggleMaximize(win.id)}
        onPointerDown={handleTitlePointerDown}
        onPointerMove={handleTitlePointerMove}
        onPointerUp={handleTitlePointerUp}
      >
        <div className="xp-titlebar-left">
          <img src={win.icon} alt="" className="xp-titlebar-icon" />
          <span className="xp-titlebar-text">{win.title}</span>
        </div>
        <div className="xp-titlebar-controls">
          <button
            aria-label="Minimize"
            className="xp-ctrl xp-ctrl-min"
            onClick={() => {
              playClick();
              minimizeWindow(win.id);
            }}
          >
            _
          </button>
          <button
            aria-label={win.maximized ? 'Restore' : 'Maximize'}
            className="xp-ctrl xp-ctrl-max"
            onClick={() => {
              playClick();
              toggleMaximize(win.id);
            }}
          >
            {win.maximized ? '\u2750' : '\u25a1'}
          </button>
          <button
            aria-label="Close"
            className="xp-ctrl xp-ctrl-close"
            onClick={() => {
              playClick();
              closeWindow(win.id);
            }}
          >
            {'\u00d7'}
          </button>
        </div>
      </div>
      <div className="xp-window-body">{children}</div>
      {win.resizable && !win.maximized && (
        <div
          className="xp-resize-handle"
          onPointerDown={handleResizePointerDown}
          onPointerMove={handleResizePointerMove}
          onPointerUp={handleResizePointerUp}
        />
      )}
    </motion.div>
  );
}
