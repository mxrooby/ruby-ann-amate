import { useState } from 'react';

interface DesktopIconProps {
  label: string;
  icon: string;
  onOpen: () => void;
  index: number;
}

export default function DesktopIcon({ label, icon, onOpen, index }: DesktopIconProps) {
  const [selected, setSelected] = useState(false);

  return (
    <button
      className={`desktop-icon ${selected ? 'selected' : ''}`}
      style={{ animationDelay: `${index * 90}ms` }}
      onClick={(e) => {
        e.stopPropagation();
        setSelected(true);
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        onOpen();
      }}
      onBlur={() => setSelected(false)}
    >
      <img src={icon} alt="" draggable={false} />
      <span className="desktop-icon-label">{label}</span>
    </button>
  );
}
