import React from "react";
// import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  return (
    <header class="p-4 dark:bg-gray-800 dark:text-gray-100">
      <div class="container flex justify-between h-16 mx-auto">                 
        <ul class="items-stretch hidden space-x-3 lg:flex">
          <li class="flex">
            <a
              rel="noopener noreferrer"
              href="https://github.com/"
              class="flex items-center px-6 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
            >
              Fetch Mate
            </a>
          </li>
          <li class="flex">
            <a
              rel="noopener noreferrer"
              href="https://github.com/"
              class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Login
            </a>
          </li>
          <li class="flex">
            <a
              rel="noopener noreferrer"
              href="https://github.com/"
              class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Logout
            </a>
          </li>
          <li class="flex">
            <a
              rel="noopener noreferrer"
              href="https://github.com/"
              class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Signup
            </a>
          </li>
          <li class="flex">
            <a
              rel="noopener noreferrer"
              href="https://github.com/"
              class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Profile
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
