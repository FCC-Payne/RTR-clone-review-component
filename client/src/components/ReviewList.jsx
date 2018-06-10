import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewList = (props) => (
  <div className="reviews">
    {
      props.reviews.map((review, index) => 
        <ReviewListEntry key={index} review={review} />
      )
    }
  </div>
);

export default ReviewList;
