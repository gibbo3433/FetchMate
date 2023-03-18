import React from "react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/fetch-mate-notext.png";

export default function Header() {
  return (
    <header className="text-teal-500">
      <div class="container flex justify-between h-16 mx-auto">
        <img src={logo} alt="logo" />
        <ul className="items-center space-x-3 lg:flex">
          <li class="flex">
            <RouterLink
              to="/"
              className="flex items-center px-6 -mb-1 border-b-2"
            >
              fetch-mate
            </RouterLink>
          </li>
          <li class="flex">
            <RouterLink
              to="/login"
              class="flex items-center px-4 -mb-1 border-b-2"
            >
              login
            </RouterLink>
          </li>
          <li class="flex">
            <RouterLink
              to="/logout"
              class="flex items-center px-4 -mb-1 border-b-2"
            >
              logout
            </RouterLink>
          </li>
          <li class="flex">
            <RouterLink
              to="/signup"
              class="flex items-center px-4 -mb-1 border-b-2"
            >
              signup
            </RouterLink>
          </li>
          <li class="flex">
            <RouterLink
              to="/profile"
              class="flex items-center px-4 -mb-1 border-b-2"
            >
              profile
            </RouterLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
