import { randomImages } from '../../data/media';
import { useOpenApp } from '../../hooks/useOpenApp';
import './mediaGrid.css';

export default function RandomFolder() {
  const openApp = useOpenApp();

  return (
    <div className="media-grid">
      {randomImages.map((img) => (
        <button
          key={img.id}
          className="media-thumb"
          title={img.filename}
          onClick={() => openApp('image-preview', { path: img.path, filename: img.filename, collection: 'random' }, img.filename)}
        >
          <img src={img.path} alt={img.filename} loading="lazy" />
          <span>{img.filename}</span>
        </button>
      ))}
    </div>
  );
}
