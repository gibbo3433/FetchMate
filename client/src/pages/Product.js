// UI Components
import ProductCard from '../components/ProductCard'
import CategoriesLinks from '../components/CategoriesLinks'

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PRODUCT } from '../utils/queries';


// Shopping Cart
import { useCart } from '../context/CartContext'
import Hero from '../components/Hero';

const Product = () => {

  return (
    <Hero />
  )
}

export default Product