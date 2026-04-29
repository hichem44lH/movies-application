import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Button } from 'react-bootstrap';
import './App.css';

// Import components
import MovieList from './components/MovieList';
import AddMovieModal from './components/AddMovieModal';

function App() {
  // Initial movies data
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      posterURL: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4.5
    },
    {
      id: 2,
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
      posterURL: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5
    },
    {
      id: 3,
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      posterURL: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4.5
    },
    {
      id: 4,
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      posterURL: "https://images.unsplash.com/photo-1594909122849-11e29194f11c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4.5
    },
    {
      id: 5,
      title: "The Matrix",
      description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
      posterURL: "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4
    },
    {
      id: 6,
      title: "Forrest Gump",
      description: "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
      posterURL: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4.5
    }
  ]);

  // State for filter
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRate, setFilterRate] = useState(0);
  
  // State for modal
  const [showModal, setShowModal] = useState(false);

  // Add new movie
  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
  };

  // Filter movies
  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(filterTitle.toLowerCase());
    const matchesRate = movie.rating >= filterRate;
    return matchesTitle && matchesRate;
  });

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar className="movie-navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="brand-logo">
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
        {/* Header */}
        <div className="app-header text-center">
          <h1 className="app-title">Discover Amazing Movies</h1>
          <p className="app-subtitle">Browse, filter, and rate your favorite films</p>
        </div>

        {/* Movie List with Filter */}
        <MovieList 
          movies={filteredMovies}
          filterTitle={filterTitle}
          setFilterTitle={setFilterTitle}
          filterRate={filterRate}
          setFilterRate={setFilterRate}
        />
      </Container>

      {/* Add Movie Modal */}
      <AddMovieModal 
        show={showModal}
        onHide={() => setShowModal(false)}
        addMovie={addMovie}
      />

      {/* Footer */}
      <footer className="movie-footer">
        <Container className="text-center">
          <p>MovieZone - Your Personal Movie Collection</p>
          <p className="footer-small">Built with React & Love</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
