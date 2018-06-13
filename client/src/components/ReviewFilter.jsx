import React from 'react';

const ReviewFilter = props => {
  let showFilterForm = props.showFilterForm;

  return (
    <div className="review-filters-wrapper">
      <div className="review-filters">
        <label>sort</label>
        <form>
          <select onChange={props.changeSortType}>
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
            <select onChange={(e) => props.handleChange(e, 'size')}>
              <option value selected>Size</option>
              {props.sizes.map((size, i) =>
                <option key={i} value={size}>{size}</option>
                )}
            </select>
            <select onChange={(e) => props.handleChange(e, 'height')}>
              <option value selected>Height</option>
              {props.heights.map((height, i) =>
                <option key={i} value={height}>{props.getHeight(height)}</option>
                )}
            </select>
            <select onChange={(e) => props.handleChange(e, 'bust')}>
              <option value selected>Bust Size</option>
              {props.busts.map((bust, i) =>
                <option key={i} value={bust}>{bust}</option>
                )}
            </select>
            <input type="text" placeholder="Age" onChange={(e) => props.handleChange(e, 'age')}></input>
          </form>
      }
      </div>
    </div>
  );
};

export default ReviewFilter;
