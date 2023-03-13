// UI Components
import DogCard from '../components/DogCard'
import CategoriesLinks from '../components/CategoriesLinks'

import { useQuery } from '@apollo/client';
import { QUERY_FEATURED_DOGS } from '../utils/queries';

// Shopping Cart
import { useCart } from '../context/CartContext'

const Home = () => {
  
  const { onAddToCart } = useCart()

  const { loading, data } = useQuery(QUERY_FEATURED_DOGS);
  const dogs = data?.dogs || [];

  return (
    <>
      <div className='w-75 border m-2 p-5'>
        <div className='section-title'>
          {dogs.map(dog => (
            <DogCard key={dog.title} {...dog} onAddToCart={()=>onAddToCart(dog)} />
          ))}
        </div>
      </div>  
      <div className='w-25 border m-2 p-5'>
        <div className='section-title'>
            Browse the Shop
        </div>
        <CategoriesLinks />
      </div>
    </>
  )
}

export default Home