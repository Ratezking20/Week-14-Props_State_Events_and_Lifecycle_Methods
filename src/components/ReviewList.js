// a container inside of a Movie that houses Review components

import React, { useState } from 'react';
import Review from './Review';

export default function ReviewList({ movies, MovieReviews, inputValueFirstName, inputStarRating, inputValueLastName, inputValueReview }) {
  const [reviews, setReviews] = useState([]);

  const addReview = () => {
    setReviews([...reviews, { name: '', review: '' }]);
  };

  const deleteReview = (index) => {
    const newReviews = [...reviews];
    newReviews.splice(index, 1);
    setReviews(newReviews);
  };

  const updateReview = (index, key, value) => {
    const newReviews = [...reviews];
    newReviews[index][key] = value;
    setReviews(newReviews);
  };

const [allMovieReviews, setAllMovieReviews] = useState(MovieReviews)

return (
    <table>
      <tbody>
        {MovieReviews.map((review, index) => (
          <tr key={index}>
            <td>
               
                  <div key={index}>
                    <Review inputValueFirstName={review.inputValueFirstName} 
                    inputValueLastName={review.inputValueLastName} 
                    value={review.review} 
                    />
                
                    <button onClick={() => deleteReview(index)}>Delete</button>
                  </div>
               
              <button onClick={() => addReview()}>Add Review</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


// {/* <Review 
//                 valueReview={inputValueReview}
//                 valueLastName={inputValueLastName}
//                 valueFirstName={inputValueFirstName}
//                 valueStarRating={inputStarRating} */}