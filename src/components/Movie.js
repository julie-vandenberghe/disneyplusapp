import React from 'react'
import { Link } from 'react-router-dom'

const Movie = ({ id, name }) => {    
  return (
    //<Fragment> > Permet d'encapsuler code JSX dans une seule balise parente mais qui ne sera pas affichée dans le HTML
     
        <div>
          <p>{name}</p>
          <Link to={`/movie/${id}`}>Détail du film</Link>
        </div>
  )
}

export default Movie