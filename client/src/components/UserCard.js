import { Link } from 'react-router-dom';

const UserCard = (props) => {

    const { _id, username, userAge, location, userDogName, userDogBreed, userDogBio } = props;

    return (
        <div className='flex p-5 m-2 border'>
            <div>
                <img src={`https://i.pravatar.cc/50?u=${username}`} alt={username} className='p-2 rounded-full' width={150} height={150} />
            </div>
            <div className='dog-details'>
                <Link to={`/dog/${_id}`}>{username}</Link>
                <div className='dog-description'>
                    <p className='text-sm'>Age: {userAge}</p>
                    <p className='text-sm'>Location: {location}</p>
                    {/* img link for dogs</p> */}
                    <p className='text-sm'>Dog Name: {userDogName}</p>
                    <p className='text-sm'>Breed: {userDogBreed}</p>
                    <p className='text-sm'>{userDogBio}</p>
                </div>
            </div>
        </div>
    )
}

export default UserCard
