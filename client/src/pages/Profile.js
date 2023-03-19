import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center my-auto">
        <h2 className="w-full md:w-10/12 bg-teal-500 text-white py-3 px-4 mb-5 rounded-xl">
          Viewing {userParam ? `${user.username}'s` : "your"} profile.
        </h2>

        <div className="w-full md:w-10/12 mb-5">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
              <p className="text-gray-600 underline">Username:</p>
              <p>{user.username}</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
              <p className="text-gray-600 underline">Email:</p>
              <p>{user.email}</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
              <p className="text-gray-600 underline">Gender:</p>
              <p>{user.userGender}</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
              <p className="text-gray-600 underline">Age:</p>
              <p>{user.userAge}</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
              <p className="text-gray-600 underline">Location:</p>
              <p>{user.location}</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
              <p className="text-gray-600 underline">Walk times:</p>
              <p>{user.walkTimes}</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
              <p className="text-gray-600 underline">Dog breed:</p>
              <p>{user.dogBreed}</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
              <p className="text-gray-600 underline">Dog age:</p>
              <p>{user.dogAge}</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
              <p className="text-gray-600 underline">Dog name:</p>
              <p>{user.dogName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
