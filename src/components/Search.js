
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Movie from './Movie';

export default function Search({movies}) {
    const [userMovieSearch, setUserMovieSearch] = useState('')
    
      
        const handleSearch = () => {
            do {  for(let movie of movies){
                if(userMovieSearch === movie.MovieTitle){
                    console.log(movie)
                }
            }    
        }while(movies.some(userMovieSearch) === {movies})
    }
    return (
        <>
            <div className='row' >
                <div className='col col-sm-3'>
                    <input className='form-control' userMovieSearch={userMovieSearch} onChange={(e) => setUserMovieSearch(e.target.value)} placeholder='Search for movie...'></input>
                    <div className='col col-sm-1'>
                        <button href='#' onClick= {handleSearch} type='button' className='btn btn-primary'>Search</button>
                    </div>
                </div>
            </div>
        
        </>
    );
}

    // while(movies.some(setSearchValue) !== {usersMovieSearch}) {
    //     // Return an alert if value is not equal to any object in array
    //     return alert("Invalid search! Please, try searching again.")
    // }


