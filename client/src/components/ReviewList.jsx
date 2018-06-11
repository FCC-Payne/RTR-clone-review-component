import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import ReviewFilter from './ReviewFilter.jsx';

const ReviewList = (props) => (
  <div className="reviews">
    <ReviewFilter
      handleOptionChange={props.handleOptionChange}
      showFilterForm={props.showFilterForm}
    />
    {
      props.reviews.map((review, index) => 
        <ReviewListEntry key={index} review={review} />
      )
    }
  </div>
);

export default ReviewList;
