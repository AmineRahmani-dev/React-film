import React from "react";
import { useNavigate } from "react-router-dom";

export default function AddMovies({ addNewMovie }) {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    posterURL: "",
    rating: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewMovie({
      ...formData,
      rating: Number(formData.rating)
    });

    setFormData({
      title: "",
      description: "",
      posterURL: "",
      rating: ""
    });

    navigate("/");
  };

  return (
    <div className="AddMovies">
      <h2>Add New Movie</h2>

      <form
        style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}
        onSubmit={handleSubmit}
      >
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input type="text" name="posterURL" placeholder="Poster URL" value={formData.posterURL} onChange={handleChange} required />
        <input type="number" name="rating" placeholder="Rating (0-5)" value={formData.rating} onChange={handleChange} required min="0" max="5" />

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}