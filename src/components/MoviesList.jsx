import React from "react";
import MovieCard from "./MovieCard";
const MoviesList = ({ movies }) => {
  return (
    <div className="row">
      {movies.map((movie, index) => (
        <div className="col-3"  key={index}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
