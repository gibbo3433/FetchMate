import React from "react";

export default function Hero () {
    return (
        <section class="dark:dark:bg-gray-800 dark:dark:text-gray-100">
            <div class="container flex flex-col-reverse mx-auto lg:flex-row">
                <div class="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:dark:bg-violet-400 dark:dark:text-gray-900">
                    <div class="flex space-x-2 sm:space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="flex-shrink-0 w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                        </svg>
                        <div class="text-wrapper space-y-2">
    <p class="text-3xl font-bold leading-snug">Fetch mate</p>
    <p class="text-xl leading-snug">Find local dog lovers in your area!</p>
    <button class="px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Get started</button>
</div>
                    </div>
                </div>
                <div class="lg:w-1/2 xl:w-3/5 dark:dark:bg-gray-800">
                    <div class="flex items-center justify-center p-4 md:p-8 lg:p-12">
                        <img src="https://publish.purewow.net/wp-content/uploads/sites/2/2022/08/dog-breed-groups.jpg?resize=1200%2C628" alt="dogs" class="rounded-lg shadow-lg dark:dark:bg-gray-500 w-full"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}