import { useEffect, useRef, useState } from 'react';
import { STARTUP_LINES, buildCommandMap, visibleCommandNames, type CommandContext } from '../../data/terminalCommands';
import { useOpenApp } from '../../hooks/useOpenApp';
import { useWindowStore } from '../../state/windowStore';
import './terminal.css';

const BANNER = ['Microsoft Windows XP [Version 5.1.2600]', 'Copyright (c) Microsoft Corporation.', ''];
const PROMPT = 'C:\\Users\\Ruby>';

interface TerminalProps {
  winId: string;
}

export default function Terminal({ winId }: TerminalProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [introDone, setIntroDone] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number | null>(null);
  const [matrixActive, setMatrixActive] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const openApp = useOpenApp();
  const restoreAll = useWindowStore((s) => s.restoreAll);
  const closeWindow = useWindowStore((s) => s.closeWindow);

  const cmdMap = useRef(buildCommandMap()).current;

  // Line-by-line intro reveal (quick, not char-by-char) — plays once per window instance.
  useEffect(() => {
    const fullIntro = [...BANNER, PROMPT, '', ...STARTUP_LINES];
    let i = 0;
    setLines([]);
    setIntroDone(false);
    const interval = setInterval(() => {
      setLines((prev) => [...prev, fullIntro[i]]);
      i += 1;
      if (i >= fullIntro.length) {
        clearInterval(interval);
        setIntroDone(true);
      }
    }, 90);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [lines, input]);

  const ctx: CommandContext = {
    openApp: (appId, props) => openApp(appId as any, props),
    restoreAll,
    openStartMenu: () => {
      /* handled at desktop level; terminal just reports it */
    },
    shutdown: () => {
      window.dispatchEvent(new CustomEvent('rubyxp:shutdown'));
    },
    clear: () => setLines([]),
    playMatrix: () => {
      setMatrixActive(true);
      setTimeout(() => setMatrixActive(false), 2200);
    },
    playBee: () => {
      window.dispatchEvent(new CustomEvent('rubyxp:bee'));
    },
  };

  function runCommand(raw: string) {
    const trimmed = raw.trim();
    const echoLine = `${PROMPT} ${trimmed}`;
    if (!trimmed) {
      setLines((prev) => [...prev, echoLine]);
      return;
    }
    setHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(null);

    const lower = trimmed.toLowerCase();
    const cmd = cmdMap.get(lower);

    if (lower === 'exit') {
      closeWindow(winId);
      return;
    }

    if (!cmd) {
      setLines((prev) => [
        ...prev,
        echoLine,
        `'${trimmed}' is not recognized as an internal or external command,`,
        'operable program or batch file.',
      ]);
      return;
    }

    const result = cmd.run(trimmed.split(/\s+/).slice(1), ctx);
    const outLines = result == null ? [] : Array.isArray(result) ? result : [result];
    setLines((prev) => [...prev, echoLine, ...outLines]);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      runCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const idx = historyIdx === null ? history.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(idx);
      setInput(history[idx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx === null) return;
      const idx = historyIdx + 1;
      if (idx >= history.length) {
        setHistoryIdx(null);
        setInput('');
      } else {
        setHistoryIdx(idx);
        setInput(history[idx]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = visibleCommandNames.find((c) => c.toLowerCase().startsWith(input.toLowerCase()) && input.length > 0);
      if (match) setInput(match);
    }
  }

  return (
    <div
      className="terminal"
      ref={bodyRef}
      onClick={() => inputRef.current?.focus()}
    >
      {lines.map((line, i) => (
        <div className="terminal-line" key={i}>
          {line === '' ? '\u00A0' : line}
        </div>
      ))}
      {introDone && (
        <div className="terminal-input-row">
          <span className="terminal-prompt">{PROMPT}</span>
          <input
            ref={inputRef}
            className="terminal-input"
            value={input}
            autoFocus
            spellCheck={false}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      )}
      {matrixActive && (
        <div style={{ position: 'fixed', inset: 0, background: '#000', color: '#0f0', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', fontSize: 14, pointerEvents: 'none' }}>
          <MatrixRain />
        </div>
      )}
    </div>
  );
}

function MatrixRain() {
  const cols = 40;
  const chars = '01';
  return (
    <div style={{ display: 'flex', gap: 4, width: '100%', height: '100%', overflow: 'hidden' }}>
      {Array.from({ length: cols }).map((_, c) => (
        <div key={c} style={{ display: 'flex', flexDirection: 'column', opacity: 0.8 }}>
          {Array.from({ length: 30 }).map((_, r) => (
            <span key={r} style={{ opacity: Math.random() }}>
              {chars[Math.floor(Math.random() * chars.length)]}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}