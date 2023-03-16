// UI Components
import UserCard from '../components/UserCard'
import Hero from '../components/Hero';

import { useQuery } from '@apollo/client';
import { QUERY_LOCAL_USERS } from '../utils/queries';


const Home = () => {

  const { loading, data } = useQuery(QUERY_LOCAL_USERS);
  const users = data?.users || [];

  console.log(users)


  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <Hero />
      </div>
  
      
  
      <div className='p-5 m-2 border' style={{ width: '100%', order: 2 }}>
        <div className='section-title'>
          {users.map(user => (
            <UserCard key={user.username} {...user} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home