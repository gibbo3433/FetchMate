import { Link } from "react-router-dom";

const UserCard = (props) => {
  const { username, location, dogName, dogBreed } = props;

  return (
    <div className="border border-slate-200 rounded-lg">
      <div className="p-8">
        <img
          src={`https://i.pravatar.cc/200?u=${username}`}
          alt={username}
          className="rounded-full mx-auto h-36 w-36 md:w-24 md:h-24"
        />
      </div>
      <p className="p-4 text-sm text-center h-24">
        {username} from {location} owns{" "}
        <strong>
          {dogName} the {dogBreed}
        </strong>
      </p>
      <div className="p-4 mb-4 text-center">
        <Link
          to={`/profile/${username}`}
          className="px-4 py-2 mt-4 text-teal-500 lowercase transition duration-300 ease-in-out border border-teal-500 rounded-md hover:bg-teal-500 hover:text-white"
        >
          View profile
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
