import React from 'react'
import { useParams } from 'react-router-dom';

export const SinglePage = () => {
  const {id} = useParams();
  return (
    <div>
      <h2>Hello from SinglePage id: {id}</h2>
    </div>
  )
}


export default SinglePage;