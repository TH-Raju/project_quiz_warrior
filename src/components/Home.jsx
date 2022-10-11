import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="block max-w-sm gap-2 mx-auto sm:max-w-full mt-20 group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-100">
            <img src="https://media.istockphoto.com/photos/online-exam-picture-id174938113?b=1&k=20&m=174938113&s=170667a&w=0&h=7Z0TxQlIRkAZGY80sQ2_cXSmNe_TBk-AUfZvHi75aI4=" alt="Website Design System" className="object-cover w-80% md:mx-auto h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
            <div className="p-6 space-y-2 lg:col-span-5">
                <div className="container flex flex-col items-center px-4 py-8 mx-auto text-center md:px-10 lg:px-12 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">Hey! <span className="text-red-700 ml-1" > Warrior</span> Let's Start the Quiz War begin.
                    </h1>
                    <div className="flex flex-wrap justify-center">
                        <Link to='/topics' >
                            <button className="px-8 py-3 mt-6 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;