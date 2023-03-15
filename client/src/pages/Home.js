// UI Components
import ProductCard from '../components/ProductCard'
import CategoriesLinks from '../components/CategoriesLinks'

import { useQuery } from '@apollo/client';
import { QUERY_FEATURED_PRODUCTS } from '../utils/queries';

// Shopping Cart
import { useCart } from '../context/CartContext'

const Home = () => {
  
  const { onAddToCart } = useCart()

  const { loading, data } = useQuery(QUERY_FEATURED_PRODUCTS);
  const products = data?.products || [];

  return (
    <ProductCard />
  )
}

export default Home