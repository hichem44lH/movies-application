import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';
import Filter from './Filter';

function MovieList({ movies, filterTitle, setFilterTitle, filterRate, setFilterRate }) {
  return (
    <div className="movie-list-section">
      {/* Filter Component */}
      <Filter 
        filterTitle={filterTitle}
        setFilterTitle={setFilterTitle}
        filterRate={filterRate}
        setFilterRate={setFilterRate}
      />

      {/* Results Count */}
      <div className="results-info">
        <p>Showing {movies.length} movie{movies.length !== 1 ? 's' : ''}</p>
      </div>

      {/* Movies Grid */}
      {movies.length > 0 ? (
        <Row className="g-4">
          {movies.map((movie) => (
            <Col lg={4} md={6} key={movie.id}>
              <MovieCard 
                title={movie.title}
                description={movie.description}
                posterURL={movie.posterURL}
                rating={movie.rating}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <div className="no-results text-center">
          <span className="no-results-icon">🎬</span>
          <h3>No movies found</h3>
          <p>Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
}

export default MovieList;