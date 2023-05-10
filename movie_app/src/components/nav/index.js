import React, { useContext } from 'react'
import "./index.css"
import { mainContext } from '../../contexts'

const Nav = () => {
    const { moviesData, setFavoriteMovie } = useContext(mainContext)

  const clickMovieHandle = (title) => {
    setFavoriteMovie(title)
  }

  return (
    <nav>
        <div className= "nav-button"> Home </div>
       {moviesData.map(movieObject => (
        <div onClick={() => clickMovieHandle(movieObject.title)}>{movieObject.title}</div>
       ))}


    </nav>
  )
}

export default Nav