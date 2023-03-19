// UI Components
import UserCard from "../components/UserCard";
import Hero from "../components/Hero";

import { useQuery } from "@apollo/client";
import { QUERY_LOCAL_USERS } from "../utils/queries";

const Home = () => {
  const { data } = useQuery(QUERY_LOCAL_USERS);
  const users = data?.users || [];

  console.log(users);

  return (
    <>
      <Hero />
      <div className="p-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users.map((user) => (
          <UserCard key={user.username} {...user} />
        ))}
      </div>
    </>
  );
};

export default Home;
