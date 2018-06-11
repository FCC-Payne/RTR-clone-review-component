import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewList = (props) => (
  <div className="reviews">
    {
      props.reviews.map((review, index) => 
        <ReviewListEntry key={index} review={review} getDate={props.getDate}/>
      )
    }
  </div>
);


export default ReviewList;
