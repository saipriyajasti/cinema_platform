import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, year, description, image, onSelect }) => {
  return (
    <div className="movie-card" onClick={onSelect}>
      <img src={image} alt={title} className="movie-image" />
      <h3 className="movie-title">{title} ({year})</h3>
      <p className="movie-description">{description}</p>
    </div>
  );
};

export default MovieCard;
