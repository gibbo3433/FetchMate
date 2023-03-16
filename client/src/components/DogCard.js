import { Link } from 'react-router-dom';


const DogCard = ({ _id, image, title, description, price }) => {

    return (
        <div className='flex p-5 m-2 border'>
            <div>
                <img src={`/assets/${image}`} alt={title} className='p-5 product-image' />
            </div>
            <div className='dog-details'>
                <Link to={`/dog/${_id}`}>{title}</Link>
                <div className='dog-description'>
                    <p className='text-sm'>{description}</p>
                </div>
                <div className='dog-price'>


                </div>
            </div>
        </div>
    )
}

export default DogCard
