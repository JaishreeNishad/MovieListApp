import React from 'react'
import { useParams } from 'react-router-dom'

const SingleMovie = () => {
  const { id } = useParams() // we are using useParams hook for access the parameter of the current route//
  return (
    
    <>

    <div>Our Single movie {id}</div>
    
    </>
  )
}

export default SingleMovie