// UI Components
import DogCard from '../components/DogCard'
import CategoriesLinks from '../components/CategoriesLinks'



const DogList = () => {
  
  const { onAddToCart } = useCart()

  const { category } = useParams();

  console.log(`DogList: category = ${category}`)

  const { loading, data } = useQuery(QUERY_SINGLE_CATEGORY, {
    // pass URL parameter
    variables: { name: category },
  });

  const dogs = data?.category.dogs || [];
  const categoryName = data?.category.name || 'Loading Dogs...';
  console.log(`DogList: products = ${dogs}`)

  return (
    <>
      <div className='w-75 border m-2 p-5'>
        <h1>All {categoryName}</h1>
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

export default DogList