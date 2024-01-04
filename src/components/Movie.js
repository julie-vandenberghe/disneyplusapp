import React from 'react'
import { Link } from 'react-router-dom'

const Movie = ({ id, title, poster }) => {    
  return (
    //<Fragment> > Permet d'encapsuler code JSX dans une seule balise parente mais qui ne sera pas affichée dans le HTML  
            <div className="box-shadow">
              <Link to={`/movie/${id}`}><img src={poster} alt={`${title} image`}></img></Link>
            </div> 
  )
}

export default Movie