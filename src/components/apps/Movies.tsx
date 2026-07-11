import { movies } from '../../data/movies';
import { useOpenApp } from '../../hooks/useOpenApp';
import './movies.css';

export default function Movies() {
  const openApp = useOpenApp();

  return (
    <div className="movie-grid">
      {movies.map((m) => (
        <button
          key={m.id}
          className="movie-poster-btn"
          onClick={() => openApp('movie-detail', { movieId: m.id }, m.title)}
        >
          <img src={m.poster} alt={m.title} />
          <span>{m.title}</span>
        </button>
      ))}
    </div>
  );
}
