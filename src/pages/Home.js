import React, { useState } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import MovieList from '../components/MovieList';
import AddMovieModal from '../components/AddMovieModal';

function Home({ movies, addMovie }) {
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRate, setFilterRate] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(filterTitle.toLowerCase());
    const matchesRate = movie.rating >= filterRate;
    return matchesTitle && matchesRate;
  });

  return (
    <>
      {/* Navbar */}
      <Navbar className="movie-navbar" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="brand-logo">
            <span className="brand-icon">🎬</span>
            <span className="brand-text">MovieZone</span>
          </Navbar.Brand>
          <Button 
            className="btn-add-movie"
            onClick={() => setShowModal(true)}
          >
            <span>+</span> Add Movie
          </Button>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="main-container">
        <div className="app-header text-center">
          <h1 className="app-title">Discover Amazing Movies</h1>
          <p className="app-subtitle">Click any movie to watch the trailer and see details</p>
        </div>

        <MovieList 
          movies={filteredMovies}
          filterTitle={filterTitle}
          setFilterTitle={setFilterTitle}
          filterRate={filterRate}
          setFilterRate={setFilterRate}
        />
      </Container>

      <AddMovieModal 
        show={showModal}
        onHide={() => setShowModal(false)}
        addMovie={addMovie}
      />

      <footer className="movie-footer">
        <Container className="text-center">
          <p>MovieZone - Your Personal Movie Collection</p>
          <p className="footer-small">Built with React Router & Love</p>
        </Container>
      </footer>
    </>
  );
}

export default Home;