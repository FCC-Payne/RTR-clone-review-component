import React from 'react';

const ReviewListEntry = (props) => {
  let name = props.review.name || "RTR Customer";
  let date = props.getDate(props.review.date_posted);

  return (
    <div className="indiv-review">
      <div className="reviewer-info label">
        <div className="reviewer-nickname header-font">
          <span>{name}</span>
        </div>
        <div className="label">
          <span className="review-detail-label">size worn:</span><strong className="review-detail-value">{props.review.size_worn}</strong>
        </div>
        <div className="label">
          <span className="review-detail-label">rented for:</span><strong className="review-detail-value">{props.review.occasion}</strong>
        </div>
        <br></br>
        <div>
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
        <p className="review-rating">rating: {props.review.rating}</p>
        <div className="review-date label">{date}</div>
        <div className="review-title header-font">{props.review.review_title}</div>
        <p className="review-text proxima-body-font body-font">{props.review.review_body}</p>
      </div>
    </div>
  )
};

export default ReviewListEntry;
