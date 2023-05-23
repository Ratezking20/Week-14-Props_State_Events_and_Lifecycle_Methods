// A text review a user can leave on a movie.

import React, { useState } from 'react';
import App from '../App';
import props from 'prop-types'
import dateFormat, { masks } from "dateformat";

export default function Review({inputValueLastName, inputStarRating, inputValueReview, inputValueFirstName}) {
  const [inputValue, setInputValue] = useState('');

  const HandleReview =() =>{
  const handleReview = (event) => {dateFormat(
        setInputValue(event.target.value));
  };
        //Reviewers name, reviewers Text review, Reviewers star rating
    return (
      <div className='card'>
        <div className='card-header'>
          <p>{inputValueFirstName} {inputValueLastName}</p>
        </div>
        <div className='card-body'>
          <p>{inputValueReview}</p> 
          <p>Rating: {inputStarRating}</p>
        </div>
      </div>
    );
  }
}

