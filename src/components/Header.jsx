import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header className="p-4">
                <div className="container flex justify-between h-16 mx-auto ">
                    <h1 className="flex items-center p-2 text-3xl font-bold">Quiz <span className="text-red-700 ml-1" > Warrior</span>
                    </h1>

                    <ul className="items-stretch hidden space-x-3 text-1xl font-bold md:flex ">
                        <li className="flex">
                            <Link to='/home' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-red-800">Home</Link>
                        </li>
                        <li className="flex">
                            <Link to='/about' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-red-800">About</Link>
                        </li>
                        <li className="flex">
                            <Link to='/blog' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-red-800">Blog</Link>
                        </li>
                        <li className="flex">
                            <Link to='/project' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-red-800">Projects</Link>
                        </li>
                    </ul>
                    <button className="flex justify-end p-4 md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;

/*  */