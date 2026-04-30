import React, { useState } from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';

function AddMovieModal({ show, onHide, addMovie }) {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    trailerURL: '',
    rating: 0,
    year: '',
    genre: '',
    director: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMovie.title && newMovie.description) {
      addMovie(newMovie);
      setNewMovie({ 
        title: '', description: '', posterURL: '', trailerURL: '', 
        rating: 0, year: '', genre: '', director: '' 
      });
      onHide();
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered className="add-movie-modal">
      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title>🎬 Add New Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-custom">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Movie Title *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter movie title"
              value={newMovie.title}
              onChange={(e) => setNewMovie({...newMovie, title: e.target.value})}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description *</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter movie description"
              value={newMovie.description}
              onChange={(e) => setNewMovie({...newMovie, description: e.target.value})}
              required
            />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Poster URL</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="Poster image URL"
                  value={newMovie.posterURL}
                  onChange={(e) => setNewMovie({...newMovie, posterURL: e.target.value})}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Trailer URL (YouTube Embed)</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="YouTube embed URL"
                  value={newMovie.trailerURL}
                  onChange={(e) => setNewMovie({...newMovie, trailerURL: e.target.value})}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. 2024"
                  value={newMovie.year}
                  onChange={(e) => setNewMovie({...newMovie, year: e.target.value})}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. Action, Drama"
                  value={newMovie.genre}
                  onChange={(e) => setNewMovie({...newMovie, genre: e.target.value})}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Director</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Director name"
                  value={newMovie.director}
                  onChange={(e) => setNewMovie({...newMovie, director: e.target.value})}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Rating: {newMovie.rating} ⭐</Form.Label>
            <Form.Range
              min={0}
              max={5}
              step={0.5}
              value={newMovie.rating}
              onChange={(e) => setNewMovie({...newMovie, rating: parseFloat(e.target.value)})}
            />
          </Form.Group>

          <div className="modal-buttons">
            <Button variant="secondary" onClick={onHide} className="btn-cancel">
              Cancel
            </Button>
            <Button variant="primary" type="submit" className="btn-submit">
              Add Movie 🎬
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddMovieModal;