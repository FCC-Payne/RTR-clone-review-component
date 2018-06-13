import React from 'react';

const ReviewFilter = props => {
  let showFilterForm = props.showFilterForm;
  let heights = props.heights.map(height => {
    height = height + '"';
    height = height.split('-').join('\' ');
    return height;
  });

  return (
    <div className="review-filters-wrapper">
      <div className="review-filters">
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
      <div>
      {
        showFilterForm &&
          <form>
            <label>Match My Size</label>
            <select>
              <option value="" selected>Size</option>
              {props.sizes.map((size, i) =>
                <option key={i} value={size}>{size}</option>
                )}
            </select>
            <select>
              <option value="" selected>Height</option>
              {heights.map((height, i) =>
                <option key={i} value={height}>{height}</option>
                )}
            </select>
            <select>
              <option value="" selected>Bust</option>
              {props.busts.map((bust, i) =>
                <option key={i} value={bust}>{bust}</option>
                )}
            </select>
            <input type="text" placeholder="Age"></input>
          </form>
      }
      </div>
    </div>
  );
};

export default ReviewFilter;
