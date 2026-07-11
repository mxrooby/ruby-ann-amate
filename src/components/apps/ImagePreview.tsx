import { useState, useMemo } from 'react';
import { galleryImages, randomImages } from '../../data/media';
import './imagePreview.css';

interface ImagePreviewProps {
  path: string;
  filename: string;
  collection?: 'gallery' | 'random';
}

export default function ImagePreview({ path, filename, collection }: ImagePreviewProps) {
  const list = useMemo(() => (collection === 'gallery' ? galleryImages : collection === 'random' ? randomImages : null), [collection]);
  const startIndex = list ? Math.max(0, list.findIndex((i) => i.path === path)) : 0;
  const [index, setIndex] = useState(startIndex);

  const current = list ? list[index] : { path, filename };

  const go = (dir: 1 | -1) => {
    if (!list) return;
    setIndex((i) => (i + dir + list.length) % list.length);
  };

  return (
    <div className="image-preview">
      <div className="image-preview-stage">
        <img src={current.path} alt={current.filename} />
      </div>
      <div className="image-preview-bar">
        {list && list.length > 1 && (
          <button className="xp-button" onClick={() => go(-1)}>&laquo; Previous</button>
        )}
        <span className="image-preview-filename">{current.filename}</span>
        {list && list.length > 1 && (
          <button className="xp-button" onClick={() => go(1)}>Next &raquo;</button>
        )}
      </div>
    </div>
  );
}
