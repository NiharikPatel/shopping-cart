import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css'; 

//Component for creating star according to rating from product data
const StarRating = ({ rating }) => {
  const stars = [];

  // Create an array of filled and half-filled stars based on the rating
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
    } else if (i - 0.5 === rating) {
      stars.push(<i key={i} className="bi bi-star-half"></i>);
    } else {
      stars.push(<i key={i} className="bi bi-star"></i>);
    }
  }

  return <div className="rating">{stars}</div>;
};

export default StarRating;
