import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import pages
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      rating: 4.5,
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0",
      year: "2010",
      genre: "Sci-Fi, Action",
      director: "Christopher Nolan"
    },
    {
      id: 2,
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rating: 5,
      trailerURL: "https://www.youtube.com/embed/EXeTwQWrcwY",
      year: "2008",
      genre: "Action, Crime, Drama",
      director: "Christopher Nolan"
    },
    {
      id: 3,
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. As resources on Earth deplete, former NASA pilot Cooper must leave his family behind to lead an expedition beyond this galaxy.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rating: 4.5,
      trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E",
      year: "2014",
      genre: "Adventure, Drama, Sci-Fi",
      director: "Christopher Nolan"
    },
    {
      id: 4,
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption in this Quentin Tarantino masterpiece.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: 4.5,
      trailerURL: "https://www.youtube.com/embed/s7EdQ4FqbhY",
      year: "1994",
      genre: "Crime, Drama",
      director: "Quentin Tarantino"
    },
    {
      id: 5,
      title: "The Matrix",
      description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      rating: 4,
      trailerURL: "https://www.youtube.com/embed/vKQi3bBA1y8",
      year: "1999",
      genre: "Action, Sci-Fi",
      director: "Lana Wachowski, Lilly Wachowski"
    },
    {
      id: 6,
      title: "Forrest Gump",
      description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      rating: 4.5,
      trailerURL: "https://www.youtube.com/embed/bLvqoHBptjg",
      year: "1994",
      genre: "Drama, Romance",
      director: "Robert Zemeckis"
    },
    {
      id: 7,
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. A story of hope, friendship, and the human spirit.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      rating: 5,
      trailerURL: "https://www.youtube.com/embed/PLl99DlL6b4",
      year: "1994",
      genre: "Drama",
      director: "Frank Darabont"
    },
    {
      id: 8,
      title: "Avengers: Endgame",
      description: "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      rating: 4.5,
      trailerURL: "https://www.youtube.com/embed/TcMBFSGVi1c",
      year: "2019",
      genre: "Action, Adventure, Drama",
      director: "Anthony Russo, Joe Russo"
    }
  ]);

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={<Home movies={movies} addMovie={addMovie} />} 
          />
          <Route 
            path="/movie/:id" 
            element={<MovieDetails movies={movies} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;