import React from "react";
import { Link } from "react-router-dom";

export default function Hero () {
    return (
        <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100">
            <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:dark:bg-violet-400 dark:dark:text-gray-900">
                    <div className="flex space-x-2 sm:space-x-4">
                        
                        <div className="text-wrapper space-y-2">
                            <p className="text-3xl font-bold leading-snug">Fetch mate</p>
                            <p className="text-xl leading-snug">Find local dog lovers in your area!</p>
                            <Link to="/signup" className="px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Signup to get started!</Link>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 xl:w-3/5 dark:dark:bg-gray-800">
                    <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">

                        <img src="https://publish.purewow.net/wp-content/uploads/sites/2/2022/08/dog-breed-groups.jpg?resize=1200%2C628" alt="dogs" class="rounded-lg shadow-lg dark:dark:bg-gray-500 w-full"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}