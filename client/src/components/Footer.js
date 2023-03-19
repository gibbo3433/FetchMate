import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 dark:text-gray-100">
      <div className="container flex justify-center h-16 mx-auto">
        <ul className="flex items-center justify-center space-x-3 lg:flex">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="https://github.com/gibbo3433"
              className="flex items-center px-4 -mb-1 dark:border-transparent text-teal-500 hover:underline hover:text-teal-500"
            >
              Jordan
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="https://github.com/Seemabibi"
              className="flex items-center px-4 -mb-1 dark:border-transparent text-teal-500 hover:underline hover:text-teal-500"
            >
              Seema
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="https://github.com/RAXOPAGNE"
              className="flex items-center px-4 -mb-1 dark:border-transparent text-teal-500 hover:underline hover:text-teal-500"
            >
              Oskar
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="https://github.com/maartjeoostvogels"
              className="flex items-center px-4 -mb-1 dark:border-transparent text-teal-500 hover:underline hover:text-teal-500"
            >
              Maartje
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="https://github.com/amarfiguig"
              className="flex items-center px-4 -mb-1 dark:border-transparent text-teal-500 hover:underline hover:text-teal-500"
            >
              Ahmed
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
