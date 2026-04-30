import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

function Filter({ filterTitle, setFilterTitle, filterRate, setFilterRate }) {
  return (
    <div className="filter-section">
      <div className="filter-container">
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

        <div className="filter-item">
          <label className="filter-label">⭐ Minimum Rating: {filterRate}</label>
          <Form.Range
            min={0}
            max={5}
            step={0.5}
            value={filterRate}
            onChange={(e) => setFilterRate(parseFloat(e.target.value))}
            className="rating-slider"
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;