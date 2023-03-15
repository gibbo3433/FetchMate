import React from "react";

export default function Footer() {
  return (
    <footer class="p-4 dark:bg-gray-800 dark:text-gray-100">
      <div class="container flex justify-between h-16 mx-auto">
        <ul class="items-stretch hidden space-x-3 lg:flex">
          <li class="flex">
            <a
              rel="noopener noreferrer"
              href="https://github.com/"
              class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Privacy
            </a>
          </li>
          <li class="flex">
            <a
              rel="noopener noreferrer"
              href="https://github.com/"
              class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Team Margherita 
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
