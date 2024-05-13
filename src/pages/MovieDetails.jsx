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
      setGeneros(data.genres);
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
      <div className="col movieDetails ">
        <p className="title">
          <strong>Título: </strong>
          {movie.title}
        </p>

          <strong>Género: </strong>

          {
            generos.map((item)=>{
                return(
                    <div key={item.id}>
                      <p>
                      - {item.name}
                      </p>
                    </div>
                )
            })
          }

        <p>
          <strong>Descripción: </strong>
          {movie.overview}
        </p>
        <div className="bot">

        <Link to="/" className="profesional">
          <img src={retroImg} alt="Retroceder" className="btn-icon" />
          <p className="">Regresar</p>
        </Link>
        </div>
      </div>
    </div>
  );
}
