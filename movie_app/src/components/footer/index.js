import React, {useContext} from 'react'
import { mainContext } from '../../contexts'

const Footer = () => {

    const {favoriteMovie} = useContext(mainContext);
  
  return (
    <div> {favoriteMovie ? `Your favourite movie is ${favoriteMovie}` : <>Nothing</>}  </div>
  )
}

export default Footer