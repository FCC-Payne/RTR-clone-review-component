import React from 'react';

const ReviewListEntry = props => {
  let name = props.review.name || "RTR Customer";
  let date = props.getDate(props.review.date_posted);
  let height = props.getHeight(props.review.height);

  let url1 = 'https://s3-us-west-1.amazonaws.com/rtr-review-user-pics/puppy' + props.review.url1 + '.jpg';
  let url2 = 'https://s3-us-west-1.amazonaws.com/rtr-review-user-pics/puppy' + props.review.url2 + '.jpg';
  let url3 = 'https://s3-us-west-1.amazonaws.com/rtr-review-user-pics/puppy' + props.review.url3 + '.jpg';



  return (
    <div className="indiv-review">
      <div className="reviewer-info label">
        <div className="reviewer-nickname header-font">
          <span>{name}</span>
          {
            (props.review.review_count >= 25) &&
            <div className="top-contributor label">top contributor</div>
          }
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
            <span className="review-detail-label">height:</span><strong className="review-detail-value">{height}</strong>
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
        <div className={"review-rating rev-stars-" + props.review.rating}></div>
        <div className="review-date label">{date}</div>
        <div className="review-title header-font">{props.review.review_title}</div>
        <p className="review-text proxima-body-font body-font">{props.review.review_body}</p>
      </div>
      <div className="review-photos">
        <div className="user-photo" >
          {
            props.review.url1 &&
            <img className="user-photo" src={url1} alt="user photo 1"></img>
          }
        </div>
        <div className="user-photo" >
          {
            props.review.url2 &&
            <img className="user-photo" src={url2} alt="user photo 2"></img>
          }
        </div>
        <div className="user-photo" >
          {
            props.review.url3 &&
            <img src={url3} alt="user photo 3"></img>
          }
        </div>
      </div>
    </div>
  )
};

export default ReviewListEntry;
