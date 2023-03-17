import React, { useState } from "react";
import Select from 'react-select'
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    userGender: "",
    userAge: "",
    location: "",
    walkTimes: "",
    dogBreed: "",
    userDogAge: "",
    userDogName: "",
  });

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
      "userGender": value,
    });
  };

  const handleDogBreedChange = (data) => {
    const { label, value } = data;
    setFormState({
      ...formState,
      "dogBreed": value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const userGender = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' },
  ]

  const WalkTimes = [
    { value: '0-30 minutes', label: '0-30 minutes' },
    { value: '30-60 minutes', label: '30-60 minutes' },
    { value: '1 hour - 2 hours', label: '1 hour - 2 hours' },
    { value: '2 hours +', label: '2 hours +' },
  ]

  const dogBreeds = [
    { value: 'Airedale Terrier', label: 'Airedale Terrier' },
    { value: 'Bulldog', label: 'Bulldog' },
    { value: 'Chihuahua', label: 'Chihuahua' },
    { value: 'Dachshund', label: 'Dachshund' },
    { value: 'English Springer Spaniel', label: 'English Springer Spaniel' },
    { value: 'French Bulldog', label: 'French Bulldog' },
    { value: 'German Shepherd', label: 'German Shepherd' },
    { value: 'Golden Retriever', label: 'Golden Retriever' },
    { value: 'Labrador Retriever', label: 'Labrador Retriever' },
    { value: 'Poodle', label: 'Poodle' },
    { value: 'Pomeranian', label: 'Pomeranian' },
    { value: 'Rottweiler', label: 'Rottweiler' },
    { value: 'Siberian Husky', label: 'Siberian Husky' },
    { value: 'Shih Tzu', label: 'Shih Tzu' },
    { value: 'Staffordshire Bull Terrier', label: 'Staffordshire Bull Terrier' },
    { value: 'St. Bernard', label: 'St. Bernard' },
    { value: 'Toy Poodle', label: 'Toy Poodle' },
    { value: 'Yorkshire Terrier', label: 'Yorkshire Terrier' },
    { value: 'West Highland White Terrier', label: 'West Highland White Terrier' },
    { value: 'Weimaraner', label: 'Weimaraner' },
  ];

  return (
    <>
      <div className="form-container">
        <h4 className="form-heading">Sign Up</h4>
        {data ? (
          <p>
            Success! You may now head{" "}
            <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit} className="form-container">
            <input
              className="form-input"
              placeholder="Your username"
              name="username"
              type="text"
              value={formState.name}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
            <Select
              className="form-select"
              placeholder="Select Gender"
              name="userGender"
              setValue={formState.userGender}
              onChange={handleGenderChange}
              options={userGender}
            />
            <input
              className="form-input"
              placeholder="Enter Age Here"
              name="userAge"
              type="text"
              value={formState.userAge}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="Enter Location Here"
              name="location"
              type="text"
              value={formState.location}
              onChange={handleChange}
            />
            <Select
              className="form-select"
              placeholder="Select Gender"
              name="userGender"
              setValue={formState.dogBreed}
              onChange={handleDogBreedChange}
              options={dogBreeds}
            />
            <input
              className="form-input"
              placeholder="Enter Dog Age Here"
              name="userDogAge"
              type="number"
              value={formState.userDogAge}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="Enter Dog Name Here"
              name="userDogName"
              type="text"
              value={formState.userDogName}
              onChange={handleChange}
            />

            <button
              className="btn btn-block btn-primary"
              style={{ cursor: "pointer" }}
              type="submit"
            >
              Submit
            </button>
          </form>
        )}

        {error && (
          <div className="p-3 my-3 text-white bg-danger">
            {error.message}
          </div>
        )}
      </div>
    </>
  );
};

export default Signup;