import { useState } from 'react';
import type { ProjectPreview } from '../../types';
import './deviceMockup.css';

interface DeviceMockupProps {
  previews: ProjectPreview[];
}

export default function DeviceMockup({ previews }: DeviceMockupProps) {
  const [index, setIndex] = useState(0);
  if (previews.length === 0) return null;
  const current = previews[index];
  const device = current.device;

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + previews.length) % previews.length);

  return (
    <div className="device-mockup-wrap">
      <div className={`device-frame device-${device}`}>
        <div className="device-screen">
          <img src={current.file} alt={`Preview ${index + 1}`} />
        </div>
      </div>
      {previews.length > 1 && (
        <div className="device-controls">
          <button className="xp-button" onClick={() => go(-1)}>
            &laquo; Previous
          </button>
          <span className="device-counter">{index + 1} / {previews.length}</span>
          <button className="xp-button" onClick={() => go(1)}>
            Next &raquo;
          </button>
        </div>
      )}
    </div>
  );
}
