import React from 'react';

const ReviewFilter = (props) => {
  // if showFilterForm is true, show the filtering forms for measurements
  // else, un-render
  let showFilterForm = props.showFilterForm;
  return (
    <div className="review-filter">
      <div className="review-filter-type">
        <label>sort</label>
        <form>
          <select onChange={props.handleOptionChange}>
            <option value="wlm">Women Like Me</option>
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="rating">Rating</option>
          </select>
        </form>
      </div>
      {
        showFilterForm &&
          <form id="match-my-size">
            <label>Match My Size</label>
          </form>
      }
    </div>
  );
};

export default ReviewFilter;
