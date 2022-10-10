import React from 'react';

const Home = () => {
    return (
        <div className="container flex flex-col items-center px-4 py-8 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 className="text-4xl font-bold leading-none sm:text-5xl">Hey! <span className="text-red-700 ml-1" > Warrior</span> Let's Start the Quiz War begin.
            </h1>

            <div className="flex flex-wrap justify-center">
                <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get started</button>
            </div>
        </div>
    );
};

export default Home;