import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const MovieCard = ({id, movie}) => {
  console.log(movie);
  const navigate = useNavigate();

  // Convert rating en étoiles (sur 5)
  const renderStars = () => {
    const stars = movie.rating; 
    return "⭐".repeat(stars);
  };

  // Redirection vers MovieDetails
  const handleClick = () => {
    navigate(`/movies/${id}`);
  };

  return (
    <Card
      onClick={handleClick}
      style={{
        width: "18rem",
        margin: "15px",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        transition: "transform 0.3s ease",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {/* Image du film */}
      <Card.Img
        variant="top"
        src={movie.posterURL}
        style={{
          height: "250px",
          objectFit: "cover"
        }}
      />

      {/* Contenu */}
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>{movie.title}</Card.Title>

        <Card.Text style={{ fontSize: "14px", color: "#555" }}>
          {movie.description.length > 80
            ? movie.description.substring(0, 80) + "..."
            : movie.description}
        </Card.Text>

        {/* Rating en étoiles */}
        <div style={{ marginTop: "10px" }}>
          <strong>{renderStars()}</strong> ({movie.rating})
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;