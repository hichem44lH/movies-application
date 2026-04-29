import React from 'react';
import { Card } from 'react-bootstrap';
import StarRating from './StarRating';

function MovieCard({ title, description, posterURL, rating }) {
  return (
    <Card className="movie-card" style={{ width: '100%' }}>
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
      </div>
      <Card.Body className="movie-card-body">
        <Card.Title className="movie-title">{title}</Card.Title>
        <Card.Text className="movie-description">
          {description}
        </Card.Text>
        <div className="movie-rating-section">
          <StarRating rating={rating} />
          <span className="rating-text">{rating}/5</span>
        </div>
      </Card.Body>
    </Card>
  );
}

// Default props
MovieCard.defaultProps = {
  title: 'Unknown Movie',
  description: 'No description available.',
  posterURL: 'https://via.placeholder.com/300x450?text=No+Poster',
  rating: 0
};

export default MovieCard;