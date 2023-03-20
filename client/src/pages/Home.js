// UI Components
import UserCard from "../components/UserCard";
import Hero from "../components/Hero";
import PostsMap from "../components/PostsMap";

import { useQuery } from "@apollo/client";
import { QUERY_LOCAL_USERS } from "../utils/queries";

const Home = () => {
  const { data } = useQuery(QUERY_LOCAL_USERS);
  const users = data?.users || [];

  console.log(users);

  return (
    <>
      <Hero />
      <h1 className="text-lg text-center mb-8">
        Find love with a wag and a woof!
      </h1>

      <h2 className="text-lg">Latest posts</h2>
      <PostsMap />

      <h2 className="text-lg">Profiles</h2>
      <div className="p-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users.map((user) => (
          <UserCard key={user.username} {...user} />
        ))}
      </div>
    </>
  );
};

export default Home;
