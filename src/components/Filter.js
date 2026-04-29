import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

function Filter({ filterTitle, setFilterTitle, filterRate, setFilterRate }) {
  return (
    <div className="filter-section">
      <div className="filter-container">
        {/* Title Filter */}
        <div className="filter-item">
          <label className="filter-label">🔍 Search by Title</label>
          <InputGroup>
            <InputGroup.Text className="filter-icon">🎬</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search movies..."
              value={filterTitle}
              onChange={(e) => setFilterTitle(e.target.value)}
              className="filter-input"
            />
          </InputGroup>
        </div>

        {/* Rating Filter */}
        <div className="filter-item">
          <label className="filter-label">⭐ Minimum Rating</label>
          <div className="rating-filter">
            <Form.Range
              min={0}
              max={5}
              step={0.5}
              value={filterRate}
              onChange={(e) => setFilterRate(parseFloat(e.target.value))}
              className="rating-slider"
            />
            <div className="rating-labels">
              <span>0</span>
              <span className="current-rating">{filterRate} ⭐</span>
              <span>5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;