import React from 'react';

const ReviewListEntry = (props) => (
  <div className="indiv-review">
    <div className="reviewer-info">
      <p>{props.review.name}</p>
      <p>size worn: {props.review.size_worn}</p>
      <p>rented for: {props.review.occasion}</p>
      <p>usually wears: {props.review.size}</p>
      <p>height: {props.review.height}</p>
      <p>age: {props.review.age}</p>
      <p>bust size: {props.review.bust}</p>
      <p>body type: {props.review.body_type}</p>
      <p>weight: {props.review.weight}</p>
    </div>
    <div className="review-content">
      <p>rating: {props.review.rating}</p>
      <p>{props.review.review_title}</p>
      <p>{props.review.review_body}</p>
    </div>
  </div>
);

export default ReviewListEntry;