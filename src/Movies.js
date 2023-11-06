import React from 'react'
import { useGlobalContext } from './context'

const Movies = () => {
  const {movie} = useGlobalContext();
  console.log(movie)
  return (
   <>
  
    {
    movie.map((curMovie)=>{
return (
  <div>
    <h2>{curMovie.Title}</h2>
    
</div>

)
    })
   } 
   </>
  )
}

export default Movies