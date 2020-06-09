import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

export const SinglePage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

   useEffect(() => {
    setLoading(true);
    async function getDetails() {
      try {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        if (data.drinks) {
          const { strDrink:name, strAlcoholic:info, strDrinkThumb:image, strCategory: category, strGlass:glass, strInstructions:instructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4 } = data.drinks[0];

          const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4,];

          const newProducts = { name, info, image, category, glass, instructions, ingredients };
          setProduct(newProducts);
        } else {
          setProduct(null)
        }
        console.log(data);
      } catch (error) {
        console.log(error)
      }
      setLoading(false);
    }
    getDetails();
  }, [id]);
  if(loading) {
    return <h2 className="section-title">Loading...</h2>
  }
  if(!product) {
    return <h2 className="section-title">no drink to display</h2>
  } else {
    const {name, image, category, info, glass, instructions, ingredients} = product;

    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">back home</Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <p>name : {name}</p>
            <p>category : {category} </p>
            <p>info : {info} </p>
            <p>glass : {glass} </p>
            <p>instructions : {instructions} </p>
            <p>ingredients : {
              ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null;
              })
              } </p>
          </div>
        </div>
      </section>
    )
  }
  
}


export default SinglePage;