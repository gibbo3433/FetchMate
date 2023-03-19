import { Link } from 'react-router-dom';


const UserCard = (props) => {

    const { _id, username, email } = props;

    return (
        <div className='flex p-5 m-2 border'>
            <div>
                <img src={`https://i.pravatar.cc/50?u=${username}`} alt={username} className='p-5 product-image' />
            </div>
            <div className='dog-details'>
                <Link to={`/dog/${_id}`}>{username}</Link>
                <div className='dog-description'>
                    <p className='text-sm'>{email}</p>
                </div>
            </div>
        </div>
    )
}

export default UserCard
