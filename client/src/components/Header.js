import React from "react";
import { Link as RouterLink } from "react-router-dom";
import logoSrc from "../assets/fetch-mate-notext.png";

const Logo = () => (
  <RouterLink to="/" className="flex items-center justify-center gap-4 mb-4">
    <img src={logoSrc} width="60" height="60" alt="" />
    <span className="transition ease-in-out duration-300 text-teal-500 py-2 px-4 border-b-2 border-transparent hover:border-teal-500">
      fetch-mate
    </span>
  </RouterLink>
);

const NavigationButton = ({ to, children }) => (
  <RouterLink
    to={to}
    className="transition ease-in-out duration-300 text-teal-500 lowercase py-2 px-4 border border-teal-500 rounded-md hover:bg-teal-500 hover:text-white"
  >
    {children}
  </RouterLink>
);
const NavigationLink = ({ to, children }) => (
  <RouterLink
    to={to}
    className="transition ease-in-out duration-300 text-teal-500 lowercase py-2 px-4 border-b-2 border-transparent hover:border-teal-500"
  >
    {children}
  </RouterLink>
);

const Navigation = () => {
  return (
    <nav className="mb-4 px-4 w-full">
      <ul className="flex">
        <li className="grow">
          <NavigationLink to="/profile">Profile</NavigationLink>
        </li>
        <li className="mr-1 ">
          <NavigationButton to="/login">Login</NavigationButton>
        </li>
        <li className="btn btn-blue">
          <NavigationButton to="/signup">Signup</NavigationButton>
        </li>
      </ul>
    </nav>
  );
};

export default function Header() {
  return (
    <header className="container mx-auto md:flex md:items-center">
      <Logo />
      <Navigation />
    </header>
  );
}
