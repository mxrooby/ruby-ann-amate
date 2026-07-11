import { galleryImages } from '../../data/media';
import { useOpenApp } from '../../hooks/useOpenApp';
import './mediaGrid.css';

export default function Gallery() {
  const openApp = useOpenApp();

  return (
    <div className="media-grid">
      {galleryImages.map((img) => (
        <button
          key={img.id}
          className="media-thumb"
          title={img.filename}
          onClick={() => openApp('image-preview', { path: img.path, filename: img.filename, collection: 'gallery' }, img.filename)}
        >
          <img src={img.path} alt={img.filename} loading="lazy" />
          <span>{img.filename}</span>
        </button>
      ))}
    </div>
  );
}
