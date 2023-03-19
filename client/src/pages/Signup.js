import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import { UserGender, WalkTimes, DogBreeds, DogAges } from "../data/data";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    userGender: "",
    userAge: "",
    location: "",
    userBio: "",
    userWalkTimes: "",
    userDogName: "",
    userDogBreed: "",
    userDogAge: "",
    userDogBio: "",
  });
  const [validationErrors, setValidationErrors] = useState([]);
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleGenderChange = (data) => {
    const { label, value } = data;
    setFormState({
      ...formState,
      userGender: value,
    });
  };

  const handleDogAgeChange = (data) => {
    const { label, value } = data;
    setFormState({
      ...formState,
      userDogAge: value,
    });
  };

  const handleWalkTimeChange = (data) => {
    const { label, value } = data;
    setFormState({
      ...formState,
      walkTime: value,
    });
  };

  const handleDogBreedChange = (data) => {
    const { label, value } = data;
    setFormState({
      ...formState,
      dogBreed: value,
    });
  };

  const validateSubmission = () => {
    const errors = [];
    if (formState.username.length < 1) {
      errors.push("Please enter a username.");
    }
    if (formState.email.length < 1) {
      errors.push("Please enter an email address.");
    }
    if (formState.password.length < 1) {
      errors.push("Please enter a password.");
    }
    if (formState.userGender.length < 1) {
      errors.push("You must specify your Gender.");
    }
    if (formState.userAge.length < 1) {
      errors.push("You must specify your Age.");
    }
    if (formState.location.length < 1) {
      errors.push("You must specify your Location.");
    }
    if (formState.userBio.length < 1) {
      errors.push("You must enter a Bio.");
    }
    if (formState.userWalkTimes.length < 1) {
      errors.push("You must enter your preferred Walk Times.");
    }
    if (formState.userDogName.length < 1) {
      errors.push("You must enter your Dog's Name.");
    }
    if (formState.userDogBreed.length < 1) {
      errors.push("You must enter your Dog's Breed.");
    }
    if (formState.userDogAge.length < 1) {
      errors.push("You must enter your Dog's Age.");
    }
    if (formState.userDogBio.length < 1) {
      errors.push("You must enter your Dog's Bio.");
    }
    return errors;
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Check this is a valid submission first
    const errors = validateSubmission();
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
      setValidationErrors([]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="items-center mx-auto w-96 form-container justify-items-center">
        <h4 className="form-heading">Sign Up</h4>
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <div className="">
            <form onSubmit={handleFormSubmit} className="flex flex-col">
              <input
                className="w-full px-3 py-2 mt-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder="Your username"
                name="username"
                type="text"
                value={formState.name}
                onChange={handleChange}
              />
              <input
                className="w-full px-3 py-2 mt-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="w-full px-3 py-2 mt-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <Select
                className="mt-2 form-select"
                placeholder="Select Gender"
                name="userGender"
                setValue={formState.userGender}
                onChange={handleGenderChange}
                options={UserGender}
              />
              <input
                className="w-full px-3 py-2 mt-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder="Enter your age"
                name="userAge"
                type="text"
                value={formState.userAge}
                onChange={handleChange}
              />
              <input
                className="w-full px-3 py-2 mt-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder="Enter your Location"
                name="location"
                type="text"
                value={formState.location}
                onChange={handleChange}
              />
              <input
                className="w-full px-3 py-2 mt-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder="Bio"
                name="userBio"
                type="text"
                value={formState.userBio}
                onChange={handleChange}
              />
              <Select
                className="mt-2 form-select"
                placeholder="Typical Walk Time"
                name="userWalkTimes"
                setValue={formState.userWalkTimes}
                onChange={handleWalkTimeChange}
                options={WalkTimes}
              />
              <input
                className="w-full px-3 py-2 mt-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder="Enter your Dog's Name"
                name="userDogName"
                type="number"
                value={formState.userDogName}
                onChange={handleChange}
              />
              <Select
                className="mt-2 form-select"
                placeholder="Select Breed"
                name="userDogBreed"
                setValue={formState.userDogBreed}
                onChange={handleDogBreedChange}
                options={DogBreeds}
              />
              <Select
                className="mt-2 form-select"
                placeholder="Enter your Dog's Age"
                name="userDogAge"
                setValue={formState.userDogAge}
                onChange={handleDogAgeChange}
                options={DogAges}
              />
              <input
                className="w-full px-3 py-2 mt-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder="Enter Dog Bio"
                name="userDogBio"
                type="text"
                value={formState.userDogBio}
                onChange={handleChange}
              />
              <button
                className="px-4 py-2 my-2 text-teal-500 lowercase transition duration-300 ease-in-out border border-teal-500 rounded-md hover:bg-teal-500 hover:text-white animate-pulse"
                style={{ cursor: "pointer" }}
                type="submit"
              >
                Sign Up
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

export default Signup;
