import React, {useState, useEffect} from 'react';
import SearchForm from '../ui/SearchForm';
import ProductList from '../ui/ProductList';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('a');
  const [products, setProducts] = useState([]);

  // fetching data from an API 
  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita').then((response) => response.json())
    .then(data => console.log(data))
  }, [])
  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <ProductList loading={loading} products={products} />
    </main>
  )
}

export default HomePage;