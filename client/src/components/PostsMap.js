import { useQuery } from "@apollo/client";
import { QUERY_POST } from "../utils/queries";
import GoogleMapReact from "google-map-react";

const apiKey = process.env.REACT_APP_API_KEY;

const Avatar = ({ username, isMap = false }) => (
  <div
    style={
      isMap ? { position: "absolute", transform: "translate(-50%, -50%)" } : {}
    }
    className="h-8 w-8"
  >
    <img
      src={`https://i.pravatar.cc/200?u=${username}`}
      alt={username}
      className="rounded-full mx-auto h-full w-full"
    />
  </div>
);

const PostsMap = () => {
  const { loading, data } = useQuery(QUERY_POST);

  console.log("Posts data is ", data);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid gird-cols-1 md:grid-cols-2 gap-4">
      <div className="w-full h-96 mb-8">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: apiKey,
            libraries: ["places"],
          }}
          defaultCenter={[52.2852, -1.52]}
          defaultZoom={5}
        >
          {data.posts.map((post) => (
            <Avatar
              key={post.id}
              lat={post.location[0]}
              lng={post.location[1]}
              isMap={true}
              username={post.username}
            />
          ))}
        </GoogleMapReact>
      </div>
      <div className="grid grid-cols-1 divide-y mb-8">
        {data.posts.slice(0, 3).map((post) => (
          <div key={post.id} className="flex items-center gap-2 h-36 p-4">
            <div className="flex-1">
              <Avatar username={post.username} />
            </div>
            <div className="flex-auto">
              <p>{post.postText.slice(0, 100)}...</p>
              <small className="text-slate-600">
                <strong>{post.username}</strong> posted on {post.createdAt}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsMap;
