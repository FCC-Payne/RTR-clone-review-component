import React from 'react';

const ReviewListEntry = (props) => (
  <div>
  <div className="indiv-review">
    <div className="reviewer-info label">
      <div className="reviewer-nickname">
        <span>{props.review.name || "RTR Customer"}</span>
      </div>
      <div className="label">
        <span className="review-detail-label">size worn:</span><strong className="review-detail-value">{props.review.size_worn}</strong>
      </div>
      <div className="label">
        <span className="review-detail-label">rented for:</span><strong className="review-detail-value">{props.review.occasion}</strong>
      </div>
      <br></br>
      <div className="reviewer-stats">
        <div className="label">
          <span className="review-detail-label">usually wears:</span><strong className="review-detail-value">{props.review.size}</strong>
        </div>
        <div className="label">
          <span className="review-detail-label">height:</span><strong className="review-detail-value">{props.review.height}</strong>
        </div>
        <div className="label">
          <span className="review-detail-label">age:</span><strong className="review-detail-value">{props.review.age}</strong>
        </div>
        <div className="label">
          <span className="review-detail-label">bust size:</span><strong className="review-detail-value">{props.review.bust}</strong>
        </div>
        <div className="label">
          <span className="review-detail-label">body type:</span><strong className="review-detail-value">{props.review.body_type}</strong>
        </div>
        <div className="label">
          <span className="review-detail-label">weight:</span><strong className="review-detail-value">{props.review.weight}</strong>
        </div>
      </div>
    </div>
    <div className="review-content">
      <p>rating: {props.review.rating}</p>
      <p>{props.review.review_title}</p>
      <p>{props.review.review_body}</p>
    </div>
  </div>
  </div>
);

export default ReviewListEntry;