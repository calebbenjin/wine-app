import React from 'react';
import {Link} from 'react-router-dom';

const Product = ({image, name, id, info, glass}) => {
  return (
    <div className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3> {name} </h3>
        <h4> {glass} </h4>
        <p> {info} </p>
        <Link to={`/singlePage/${id}`} className="btn btn-primary btn-details">Details</Link>
      </div>
    </div>
  )
}


export default Product;