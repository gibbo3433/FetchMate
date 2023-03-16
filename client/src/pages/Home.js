// UI Components
import UserCard from '../components/UserCard'

import { useQuery } from '@apollo/client';
import { QUERY_LOCAL_USERS } from '../utils/queries';


const Home = () => {

  const { loading, data } = useQuery(QUERY_LOCAL_USERS);
  const users = data?.users || [];

  console.log(users)


  return (
    <>
      <div className='p-5 m-2 border w-75'>
        <div className='section-title'>
          {users.map(user => (
            <UserCard key={user.username} {...user} />
          ))}
        </div>
      </div>
      <div className='p-5 m-2 border w-25'>

        <div className='section-title'>
          Browse the Shop
        </div>
      </div>
    </>
  )
}

export default Home