import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS_BY_USER } from "../utils/queries";

const Posts = ({ username }) => {
  const { loading, data } = useQuery(QUERY_POSTS_BY_USER, {
    variables: { username },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-lg">Recent posts</h2>
      <ul>
        {data.postsByUser.map((post) => (
          <li className="my-4">
            <p>{post.postText}</p>
            <p className="text-slate-500 italic">Posted on {post.createdAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
