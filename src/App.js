import React, { useState } from "react";
import Filter from "./Components/Filter";
import movies from "./movies";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
import MovieList from "./Components/MovieList";
import AddMovies from "./Components/AddMovies";

function App() {
  const [movieList, setMovieList] = useState(movies);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");


  const addNewMovie = (newMovie) => {
    const nextId =
      movieList.length > 0
        ? Math.max(...movieList.map((movie) => movie.id)) + 1
        : 0;

    const movieToAdd = {
      id: nextId,
      title: newMovie.title,
      description: newMovie.description,
      posterURL: newMovie.posterURL,
      rating: Number(newMovie.rating) || 0,
    };

    setMovieList((prev) => [...prev, movieToAdd]);
  };


  const filteredMovies = movieList.filter((movie) => {
    const matchTitle =
      movie.title.toLowerCase().includes(titleFilter.toLowerCase());

    const matchRating =
      ratingFilter === "" || movie.rating >= Number(ratingFilter);

    return matchTitle && matchRating;
  });

  return (
    <Routes>
    
      <Route
        path="/"
        element={
          <>
            <h1 style={{ textAlign: "center" }}>🎬 Movie App</h1>

            <Filter
              titleFilter={titleFilter}
              setTitleFilter={setTitleFilter}
              ratingFilter={ratingFilter}
              setRatingFilter={setRatingFilter}
            />

            <MovieList movies={filteredMovies} />
          </>
        }
      />

    
      <Route
        path="/movies/:id"
        element={<MovieDetails movies={movieList} />}
      />

    
      <Route
        path="/addmovie"
        element={<AddMovies addNewMovie={addNewMovie} />}
      />
    </Routes>
  );
}

export default App;