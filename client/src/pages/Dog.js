// UI Components
import DogCard from '../components/DogCard'
import CategoriesLinks from '../components/CategoriesLinks'

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_DOG } from '../utils/queries';


// Shopping Cart
import { useCart } from '../context/CartContext'
import Hero from '../components/Hero';

const Dog = () => {

  const { onAddToCart } = useCart()

  const params = useParams();
  const { dogId } = useParams();

  console.log('params: ', params)

  const { loading, data } = useQuery(QUERY_SINGLE_DOG, {
    // pass URL parameter
    variables: { dogId: dogId },
  });

  const dog = data?.dog || {};
  const dogTitle = loading ? 'Loading Dog...' : data?.dog.title;
  console.log(`Dog: dogs = ${data}`)

  return (
    <>
      <div className='p-5 m-2 border w-75'>
        <h1>{dogTitle}</h1>
        <div className='section-title'>

          <DogCard key={dog.title} {...dog} onAddToCart={() => onAddToCart(dog)} />

        </div>
      </div>
      <div className='p-5 m-2 border w-25'>
        <div className='section-title'>
          Browse the Shop
        </div>
        <CategoriesLinks />
      </div>
    </>
  )
}

export default Dog