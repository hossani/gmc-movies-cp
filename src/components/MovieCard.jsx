import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="card" >
      <img src={movie.posterURL} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.description}</p>
        <span className="badge bg-secondary">{movie.rating}</span>
      </div>
    </div>
  );
};

export default MovieCard;
