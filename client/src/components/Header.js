import React from "react";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  return (
    <header class="p-4 dark:bg-gray-800 dark:text-gray-100">
      <div class="container flex justify-between h-16 mx-auto">                 
        <ul class="items-stretch hidden space-x-3 lg:flex">
          <li class="flex">
            <RouterLink
              to="/"
              class="flex items-center px-6 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
            >
              Fetch Mate
            </RouterLink>
          </li>
          <li class="flex">
            <RouterLink
              to="/login"
              class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Login
            </RouterLink>
          </li>
          <li class="flex">
            <RouterLink
              to="/logout"
              class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Logout
            </RouterLink>
          </li>
          <li class="flex">
            <RouterLink
              to="/signup"
              class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Signup
            </RouterLink>
          </li>
          <li class="flex">
            <RouterLink
              to="/profile"
              class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Profile
            </RouterLink>
          </li>
        </ul>
      </div>
    </header>
  );
}