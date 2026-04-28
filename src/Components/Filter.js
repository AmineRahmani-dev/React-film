import React from "react";

export default function Filter({
  titleFilter,
  setTitleFilter,
  ratingFilter,
  setRatingFilter
}) {
  return (
    <div style={{ margin: "20px" }}>
      <h2>Filter Movies</h2>

      <div style={{ display: "flex", gap: "15px" }}>

      
        <input
          type="text"
          value={titleFilter}
          placeholder="Search by title..."
          onChange={(e) => setTitleFilter(e.target.value)}
        />

      
        <input
          type="number"
          value={ratingFilter}
          placeholder="search by rating..."
          required min="0" max="5"
          onChange={(e) => setRatingFilter(e.target.value)}
        />

      </div>
    </div>
  );
}