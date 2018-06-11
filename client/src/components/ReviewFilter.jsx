import React from 'react';

const ReviewFilter = (props) => {

  return (
    <div className="review-filter">
      <div className="review-filter-type">
        <label>sort</label>
        <form>
          <select>
            <option value="wlm">Women Like Me</option>
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="rating">Rating</option>
          </select>
        </form>
      </div>
      <form>
        <label>Match My Size</label>
      </form>
    </div>
  );
};

export default ReviewFilter;
