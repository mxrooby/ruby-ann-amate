import { movies } from '../../data/movies';
import './movieDetail.css';

interface MovieDetailProps {
  movieId: string;
}

export default function MovieDetail({ movieId }: MovieDetailProps) {
  const movie = movies.find((m) => m.id === movieId);
  if (!movie) return <div className="detail-empty">Movie not found.</div>;

  return (
    <div className="movie-detail">
      <img src={movie.poster} alt={movie.title} className="movie-detail-poster" />
      <div className="movie-detail-info">
        <h2>{movie.title}</h2>
        <p><strong>Year:</strong> {movie.year}</p>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Director:</strong> {movie.director}</p>
        <p className="movie-detail-tag">On Ruby&apos;s list of favorite films.</p>
      </div>
    </div>
  );
}
