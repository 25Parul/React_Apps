import React, { useContext } from 'react'
import { mainContext } from '../../contexts/index';

const MovieCard = ({ movieObject }) => {
    // let { favoriteMovie, setFavoriteMovie } = useContext(mainContext);

    // let thisMovieIsLiked = favoriteMovie === movieData ? true :false;
    console.log(movieObject)
  return (
    <div>
        {/* <h1> {movieData.title} </h1>
        {thisMovieIsLiked ? <div> Favorite!</div> : <></>}
        <button onClick={() => setFavoriteMovie(movieData.title)}>Make this movie Favorite?</button> */}
      <h1>{movieObject.title}</h1>
      <div>
        {}
      </div>
    </div>
  )
}

export default MovieCard