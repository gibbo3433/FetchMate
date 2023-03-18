import React from "react";
import fetchMateImg from "../assets/puppies.jpeg";

export default function Hero() {
  return (
    <div className="flex align-center">
      <div class="lg:w-1/2 xl:w-3/5 dark:dark:bg-gray-800">
        <div class="flex items-center justify-center p-4 md:p-8 lg:p-12">
          <img src={fetchMateImg} alt="puppies"></img>
        </div>
      </div>
    </div>
  );
}
