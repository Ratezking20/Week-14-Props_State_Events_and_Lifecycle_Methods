import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import AppHeading from './components/AppHeading';
import Search from './components/Search';





function App() {

const backgroundStyle = {
  backgroundColor:'yellow'
}

  return (
    <div  style={backgroundStyle} className= 'container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>  
      <div className='row'>
        <MovieList />

        </div>
      </div>
    </div> 
  );
}

export default App;
