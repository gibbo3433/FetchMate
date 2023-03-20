import React, { useState } from "react";
// import Select from "react-select";
import { Link } from "react-router-dom";

// import GoogleMapReact from "google-map-react";

import { useMutation } from "@apollo/client";
import { ADD_POST } from "../utils/mutations";

// import Auth from "../utils/auth";

const Post = () => {
  const [formState, setFormState] = useState({
    location: "",
    postText: "",
  });
  const [validationErrors, setValidationErrors] = useState([]);
  const [addPost, { error, data }] = useMutation(ADD_POST);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const validateSubmission = () => {
    const errors = [];
    if (formState.postText.length < 1) {
      errors.push("Please enter a username.");
    }
    if (formState.location.split(",").length < 2) {
      errors.push("Please enter coordinates, for example 51.48,-3.18");
    }
    return errors;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log(formState);

    // Clear any or previous errors
    setValidationErrors([]);

    // Check this is a valid submission first
    const errors = validateSubmission();
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }

    try {
      await addPost({
        variables: {
          ...formState,
          location: [...formState.location.split(",")].map((coord) =>
            Number.parseFloat(coord)
          ),
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="items-center mx-auto w-96 form-container justify-items-center">
        <h4 className="form-heading">Post</h4>
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <div className="">
            <form onSubmit={handleFormSubmit} className="flex flex-col">
              <input
                className="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                name="location"
                placeholder="Enter coordinates..."
                onChange={handleChange}
                value={formState.location}
              />
              <textarea
                className="w-full px-3 py-2 mt-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline h-48"
                name="postText"
                onChange={handleChange}
                value={formState.postText}
              />

              <button
                className="px-4 py-2 my-2 text-teal-500 lowercase transition duration-300 ease-in-out border border-teal-500 rounded-md hover:bg-teal-500 hover:text-white animate-pulse cursor-pointer"
                type="submit"
              >
                Post
              </button>
            </form>
          </div>
        )}

        {error && (
          <div className="p-3 my-3 text-red bg-danger">{error.message}</div>
        )}
        {validationErrors.length > 0 && (
          <div className="p-3 my-3 text-red bg-danger">
            {validationErrors.map((err) => (
              <p key={err}>{err}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Post;
