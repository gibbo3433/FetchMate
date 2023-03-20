import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("Attempting login for ", formState.email);

      const { data } = await login({
        variables: { ...formState },
      });

      console.log("login data returned is", data);

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="items-center mx-auto w-96 form-container justify-items-center">
        <h4 className="card-header bg-dark text-light p-2">Login</h4>
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit} className="flex flex-col">
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
            <button
              className="px-4 py-2 my-2 text-teal-500 lowercase transition duration-300 ease-in-out border border-teal-500 rounded-md hover:bg-teal-500 hover:text-white animate-pulse"
              style={{ cursor: "pointer" }}
              type="submit"
            >
              Submit
            </button>
          </form>
        )}

        {error && (
          <div className="my-3 p-3 bg-danger text-black">{error.message}</div>
        )}
      </div>
    </>
  );
};

export default Login;
