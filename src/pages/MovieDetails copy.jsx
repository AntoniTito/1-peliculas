import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { get } from "../data/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import "../pages/MovieDetails.css";
import retroImg from "../img/retro.png";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGeneros(data.genres[0]);
    });
  }, [movieId]);

  if (!movie) {
    return (
      <div className="detailsContainer">
        <div>Cargando...</div>
      </div>
    );
  }

  const imageUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div className="detailsContainer">
      <img src={imageUrl} alt={movie.title} className="col movieImage" />
      <div className="col movieDetails">
        <p className="title">
          <strong>Título: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Género: </strong>
          {generos.name}
        </p>
        <p>
          <strong>Descripción: </strong>
          {movie.overview}
        </p>
        <Link to="/" className="btn btn-primary">
  <img src={retroImg} alt="Retroceder" className="img-fluid" />
</Link>
      </div>
    </div>
  );
}
