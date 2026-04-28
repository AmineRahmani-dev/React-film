import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies[id]; // id correspond à l’index passé depuis MovieCard

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{movie.title}</h1>
      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{ width: "300px", borderRadius: "10px" }}
      />
      <p style={{ marginTop: "20px" }}>{movie.description}</p>
      <h3>⭐ {movie.rating}</h3>
      <button onClick={() => navigate("/")}>🔙 Back</button>
    </div>
  );
};

export default MovieDetails;