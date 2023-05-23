//a component that represents movie data (i.e. 
// image, synopsis, rating, etc…)
import React from "react"
import MovieList from "./MovieList";
import Review from "./Review";




export default function Movie({image, MovieReviews, MovieTitle, Year, Actors, Description}) {
    
    const imageStyles = {
        maxWidth: '300px',
        maxHeight: '500px',
        padding:'10px',
        float: 'left',
    }

    const containerStyles = {
        width: '50%'
   }
   
    
    return(
        <>
                <div>
                    <div>
                        <img style= {imageStyles} src= {image} alt="movie" />
                    </div>
                    <div style={containerStyles}>
                        <h2>{MovieTitle}, {Year}</h2>
                        <p><small>Lead Actor(s): {Actors}</small></p>
                        <p>{Description}</p>
                    </div>
              </div>
              <div>
                <h4>Reviews</h4>
                <p>{MovieReviews}</p>
              </div>
        </>
    );
};


