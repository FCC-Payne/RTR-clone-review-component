import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';
import ReviewFilter from './ReviewFilter.jsx';

const ReviewList = props => (
  <div className="reviews">
    <ReviewFilter
      changeSortType={props.changeSortType}
      showFilterForm={props.showFilterForm}
      sizes={props.sizes}
      busts={props.busts}
      heights={props.heights}
      handleChange={props.handleChange}
      reviews={props.reviews}
      getHeight={props.getHeight}
    />
    {
      props.reviews.map((review, index) => 
        <ReviewListEntry key={index} review={review} getDate={props.getDate} getHeight={props.getHeight}/>
      )
    }
  </div>
);


export default ReviewList;
