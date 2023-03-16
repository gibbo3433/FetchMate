// UI Components
import DogCard from '../components/DogCard'
import CategoriesLinks from '../components/CategoriesLinks'

import { QUERY_SINGLE_CATEGORY } from '../utils/queries';

import { useQuery } from '@apollo/client';


const DogList = () => {

  const category = 'Dogs';

  const { loading, data } = useQuery(QUERY_SINGLE_CATEGORY, {
    // pass URL parameter
    variables: { name: category },
  });

  const dogs = data?.category.dogs || [];
  const categoryName = data?.category.name || 'Loading Dogs...';
  console.log(`DogList: products = ${dogs}`)

  return (
    <>
      <div className='p-5 m-2 border w-75'>
        <h1>All {categoryName}</h1>
        <div className='section-title'>
          {dogs.map(dog => (
            <DogCard key={dog.title} {...dog} />
          ))}
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

export default DogList