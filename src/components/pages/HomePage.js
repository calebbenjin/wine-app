import React, {useState, useEffect} from 'react';
import SearchForm from '../ui/SearchForm';
import ProductList from '../ui/ProductList';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('a');
  const [products, setProducts] = useState([]);

  // fetching data from an API 
  useEffect(() => {
    setLoading(true);
    async function getDrinks() {
      try {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        const data = await res.json();
        const {drinks} = data;
        if(drinks) {
          const newProducts = drinks.map((item) => {
            const {idDrinks,strDrink,strDrinkThumb, strAlcholic, strGlass} = item;
            return {id:idDrinks, name:strDrink,image:strDrinkThumb, info:strAlcholic, glass:strGlass}
          });

          setProducts(newProducts);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.log(error)
      }

      setLoading(false);
    }
    getDrinks();
  }, [searchTerm]);
  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <ProductList loading={loading} products={products} />
    </main>
  )
}

export default HomePage;