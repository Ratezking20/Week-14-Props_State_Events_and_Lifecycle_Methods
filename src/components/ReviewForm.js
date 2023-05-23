// a form at the bottom of a Movie component that allows 
// users to leave reviews. When submitted, the review 
// should be added to the movie. All this data can be stored in 
// an array, no networking or database needed for this assignment.

import React, {useState} from 'react';
import Stars from './Stars';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import props from 'prop-types'
import ReviewList from './ReviewList';


export default function ReviewForm({movie, MovieReviews, movies}){
    
    const [inputValueFirstName, setInputValueFirstName] = useState('')
    const [inputValueLastName, setInputValueLastName] = useState('')
    const [inputValueReview, setInputValueReview] = useState('')
    const [inputValueStars, setInputValueStars] = useState('')
    const [allStoredReviews, setAllStoredReviews] = useState([])

    const handleReview = () => {
        const HandleReview = (e) => {
        setInputValueFirstName(e.target.value);
        setInputValueLastName(e.target.value);
        setInputValueReview(e.target.value)
        };
    }
        const addReview = () => {
            setAllStoredReviews([...MovieReviews, { inputValueFirstName: inputValueFirstName, inputValueLastName: inputValueLastName, inputValueReview: inputValueReview }]);
          };
        
const styleFirstNameInput = {
    width: '50%',
    display: "inline-block"
}
const styleLastNameInput = {
    width: '50%',
    display: "inline-block"
    
}
const styleReviewInput = {
    width: '100%',
}


    return (
        <form>
            <div className='card container'>
                <div className='card-header'>
                    <h1 className='card-title'>What rating would you give this movie?</h1>
                </div>
                    <Stars 
                    inputValueStars={inputValueStars}/>
                <div className='container-fluid card-body'>
                    <input 
                    className='form-control'
                    type='text'
                    style={styleFirstNameInput}
                    onChange={inputValueFirstName}
                    placeholder='Enter First Name'></input> 
                    <input 
                    className='form-control'
                    type='text'
                    style={styleLastNameInput}
                    onChange={inputValueLastName}
                    placeholder='Enter Last Name'></input><br></br>
                    <textarea 
                    className='form-control'
                    type='text'
                    style={styleReviewInput}
                    valueReview={inputValueReview} 
                    onChange={handleReview} 
                    placeholder='Write a Review...'></textarea><br></br>
                    <button 
                    className='btn btn-primary' 
                    onClick={addReview}>Submit Review</button>
                </div>
               
                <ReviewList 
                movies={movies}
                MovieReviews={allStoredReviews}
                />
            </div>
        </form>
    )
};
