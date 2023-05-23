//•	Using what you’ve learned this week, create a page of an 
//  app that enables users to vote and leave reviews on movies.

// movielist- a container for all the Movie components and their data

import React from 'react';
import Movie from './Movie';
import { useState, useEffect } from 'react';
import ReviewForm from './ReviewForm';
import Search from './Search';
import AppHeading from './AppHeading';


export default function MovieList() {
  
  const [movies, setMovies] = useState([ {
    id: "0",
    Actors: 'Leonardo Dicaprio, Kate Winslet, Billy Zane',
    MovieTitle: 'The Titanic',
    Year: '1997',
    Description: 'Titanic is a 1997 American epic romantic disaster movie. It was directed, written, and co-produced by James Cameron. The movie is about the 1912 sinking of the RMS Titanic. It stars Kate Winslet and Leonardo DiCaprio. The two play characters who are of different social classes.',
    image: 'https://picfiles.alphacoders.com/140/thumb-1920-140033.jpg',
    MovieReviews: ['This review will show up! ',"Here's a second review on the same movie! "],
    },
            
    {
    id: "1",
    Actors: 'Will Smith, Shia LeBeouf, James Cromwell, Bruce Greenwood, Bridget Moynahan',
    Year: '2004',
    MovieTitle: 'iRobot',
    Description: 'I, Robot is a 2004 American science fiction action film directed by Alex Proyas. The screenplay by Jeff Vintar and Akiva Goldsman is from a screen story by Vintar, based on his original screenplay Hardwired, and named after Isaac Asimovs 1950 short-story collection. The film stars Will Smith in the main role, Bridget Moynahan, Bruce Greenwood, James Cromwell, Chi McBride, and Alan Tudyk. In 2035, highly intelligent robots fill public service positions throughout the dystopian[3] world, operating under three rules to keep humans safe.',
    image: 'https://image.tmdb.org/t/p/original/hr9bfRXIHxJ6Qcsw6u6jNnBzVfh.jpg',
    MovieReviews: ['This review shows on a different movie. '],
    },
                
    {
    id: "2",
    Actors: 'Ice Cube, Chris Tucker, Tommy Lister, John Witherspoon, Nia Long, Faizon, Love, Regina King. Bernie Mac',
    Year: '1995',
    MovieTitle: 'Friday',
    Description: 'Friday is a 1995 American buddy comedy film directed by F. Gary Gray and written by Ice Cube and DJ Pooh. The first installment in the Friday trilogy, the film stars Ice Cube, Chris Tucker, Nia Long, Bernie Mac, Tiny "Zeus" Lister Jr., John Witherspoon, Regina King, and Anna Maria Horsford. Set in South Central Los Angeles, it follows unemployed friends Craig Jones and Smokey, who face troubles after becoming indebted to a local drug dealer.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81C2FAaVFFL._RI_.jpg',
    MovieReviews: [],
    },
            
    {
    id: "3",
    Actors: 'Samuel L. Jackson',
    Year: '2019',
    MovieTitle: 'Shaft',
    Description: 'Shaft is a 2019 American action comedy film directed by Tim Story and written by Kenya Barris and Alex Barnow. The film stars Samuel L. Jackson, Jessie T. Usher, Regina Hall, and Richard Roundtree. It is the fifth film in the Shaft series and a direct sequel to the 2000 film with the same title.',
    image: 'https://image.tmdb.org/t/p/original/uiXKlDtaDvrrOLy0XULcfc12flu.jpg',
    MovieReviews: [],
    },
            
    {
    id: "4",
    Actors: 'Denzel Washington, Ethan Hawke',
    Year: '2001',
    MovieTitle: 'Training Day',
    Description: 'Training Day is a 2001 American crime thriller film directed by Antoine Fuqua and written by David Ayer. It stars Denzel Washington as Alonzo Harris and Ethan Hawke as Jake Hoyt, two LAPD narcotics officers over a 24-hour period in the gang-ridden neighborhoods of Westlake, Echo Park, and South Central Los Angeles. It also features Scott Glenn, Eva Mendes, Cliff Curtis, Dr. Dre, Snoop Dogg, and Macy Gray in supporting roles.',
    image: 'https://media-cache.cinematerial.com/p/500x/eagolg6f/training-day-movie-poster.jpg',
    MovieReviews: [],
    },
            
    {
    id: "5",
    Actors: 'Johnny Depp , Keira Christina Knightley, Orlando Bloom, Geoffrey Rush',
    Year: '2003',
    MovieTitle: 'The Pirates of The Carribean',
    Description: 'The story follows pirate Jack Sparrow (Johnny Depp) and blacksmith Will Turner (Orlando Bloom) as they rescue the kidnapped Elizabeth Swann (Keira Knightley) from the cursed crew of the Black Pearl, captained by Hector Barbossa (Geoffrey Rush), who become undead skeletons in moonlight.',
    image: 'https://image.tmdb.org/t/p/original/mNVTBUyGGzL3scCOiLCdDUkkt8o.jpg',
    MovieReviews: [],
    },
            
    {
    id: "6",
    Actors: 'Martin Lawrence, Luke Wilson, Peter Greene',
    Year: '1999',
    MovieTitle: 'Blue Streak',
    Description: 'Blue Streak is a 1999 American buddy cop action comedy film directed by Les Mayfield. Inspired by the 1965 film The Big Job, the film stars Martin Lawrence, Luke Wilson, Dave Chappelle, Peter Greene, Nicole Ari Parker and William Forsythe. Lawrence plays Miles, a jewel thief who tries to retrieve a diamond he left at a police station, whereupon he disguises himself as a detective and gets paired with a real policeman to investigate burglaries. The film was shot on location in California. The prime shooting spot was Sony Pictures Studios, which is located in Culver City, California.',
    image: 'https://i.pinimg.com/1200x/1b/47/f1/1b47f14b6e950e337f795d10030a8fed.jpg',
    MovieReviews: [],
    },
            
    {
    id: "7",
    Actors: 'Keanu Reeves, Carrie-Anne Moss, Lawrence Fishburne, Hugo Weaving',
    Year: '1999',
    MovieTitle: 'The Matrix',
    Description: 'The Matrix is a 1999 science fiction action film[5][6] written and directed by the Wachowskis.[a] It is the first installment in the Matrix film series, starring Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano, and depicts a dystopian future in which humanity is unknowingly trapped inside the Matrix, a simulated reality that intelligent machines have created to distract humans while using their bodies as an energy source.[7] When computer programmer Thomas Anderson, under the hacker alias "Neo", uncovers the truth, he joins a rebellion against the machines along with other people who have been freed from the Matrix.',
    image: 'https://image.tmdb.org/t/p/original/yll2e9p3BlpLzsIevBxi8mQWKh0.jpg',
    MovieReviews: [],
    },],'');

const getMovie = async () => {
  const response = await fetch(movies);
  const responseJson = await response.json();
  console.log(responseJson);
  setMovies(responseJson.Search);
};

useEffect((e) => {
  getMovie(e);
}, []);
  
  
return(
    
  <><div>
    <AppHeading />
  </div><div>
      <Search movies={movies} MovieTitle={movies.MovieTitle} />
      <div>

        {movies.map((movie, index) => (
          <>
            <Movie
              MovieTitle={movie.MovieTitle}
              Description={movie.Description}
              Year={movie.Year}
              image={movie.image}
              Actors={movie.Actors}
              MovieReviews={movie.MovieReviews}
              alt="movie" />
            <div>
              <ReviewForm movies={movies} reviews={movie.MovieReviews} alt='review-form' />
            </div></>
        ))}
      </div>
    </div></>
  );
};