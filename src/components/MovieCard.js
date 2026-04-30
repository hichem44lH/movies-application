import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import StarRating from './StarRating';

function MovieCard({ id, title, description, posterURL, rating, year }) {
  const navigate = useNavigate();

  return (
    <Card 
      className="movie-card" 
      onClick={() => navigate(`/movie/${id}`)}
      style={{ cursor: 'pointer' }}
    >
      <div className="movie-poster-wrapper">
        <Card.Img 
          variant="top" 
          src={posterURL} 
          className="movie-poster"
          alt={title}
        />
        <div className="movie-rating-overlay">
          <span className="rating-badge">{rating}</span>
        </div>
        <div className="movie-play-overlay">
          <span className="play-icon">▶</span>
          <span className="play-text">Watch Trailer</span>
        </div>
      </div>
      <Card.Body className="movie-card-body">
        <div className="movie-year">{year}</div>
        <Card.Title className="movie-title">{title}</Card.Title>
        <Card.Text className="movie-description">
          {description.substring(0, 100)}...
        </Card.Text>
        <div className="movie-rating-section">
          <StarRating rating={rating} />
          <span className="rating-text">{rating}/5</span>
        </div>
      </Card.Body>
    </Card>
  );
}

MovieCard.defaultProps = {
  title: 'Unknown Movie',
  description: 'No description available.',
  posterURL: 'https://via.placeholder.com/300x450?text=No+Poster',
  rating: 0,
  year: 'N/A'
};

export default MovieCard;