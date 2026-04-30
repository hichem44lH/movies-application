import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button, Badge, Row, Col } from 'react-bootstrap';
import StarRating from '../components/StarRating';

function MovieDetails({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return (
      <Container className="not-found text-center">
        <h1>🎬 Movie Not Found</h1>
        <Button className="btn-back" onClick={() => navigate('/')}>← Back to Home</Button>
      </Container>
    );
  }

  return (
    <div className="movie-details-page">
      {/* Header Bar */}
      <div className="details-header">
        <Container>
          <Button className="btn-back" onClick={() => navigate('/')}>
            ← Back to Movies
          </Button>
        </Container>
      </div>

      {/* Movie Content */}
      <Container className="details-container">
        <Row className="g-5">
          {/* Poster Column */}
          <Col lg={4} md={5}>
            <div className="details-poster-wrapper">
              <img 
                src={movie.posterURL} 
                alt={movie.title}
                className="details-poster"
              />
            </div>
          </Col>

          {/* Info Column */}
          <Col lg={8} md={7}>
            <div className="details-info">
              <div className="details-badges">
                <Badge bg="danger" className="detail-badge">{movie.year}</Badge>
                <Badge bg="primary" className="detail-badge">{movie.genre}</Badge>
                <Badge bg="success" className="detail-badge">{movie.director}</Badge>
              </div>

              <h1 className="details-title">{movie.title}</h1>

              <div className="details-rating">
                <StarRating rating={movie.rating} />
                <span className="details-rating-text">{movie.rating} / 5</span>
              </div>

              <div className="details-description">
                <h3>Synopsis</h3>
                <p>{movie.description}</p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Trailer Section */}
        <div className="trailer-section">
          <h2 className="trailer-title">🎬 Watch Trailer</h2>
          <div className="trailer-wrapper">
            <iframe
              src={movie.trailerURL}
              title={`${movie.title} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="trailer-video"
            ></iframe>
          </div>
        </div>
      </Container>

      {/* Footer */}
      <footer className="movie-footer">
        <Container className="text-center">
          <Button className="btn-back-bottom" onClick={() => navigate('/')}>
            ← Back to All Movies
          </Button>
          <p className="mt-3">MovieZone - Your Personal Movie Collection</p>
        </Container>
      </footer>
    </div>
  );
}

export default MovieDetails;