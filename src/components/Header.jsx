import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <header className="p-4">
                <div className="container flex justify-between h-16 mx-auto ">
                    <h1 className="flex items-center p-2 text-4xl font-bold">Quiz <span className="text-red-700 ml-1" > Warrior</span>
                    </h1>

                    <ul className={` items-stretch ease-in ${open ? 'top-10' : 'hidden'} md:space-x-5 justify-end text-2xl font-bold md:flex`}>
                        <li className="flex">
                            <Link to='/home' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-red-800">Home</Link>
                        </li>
                        <li className="flex">
                            <Link to='/topics' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-red-800">Topics</Link>
                        </li>
                        <li className="flex">
                            <Link to='/statistics' className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-red-800">Statistics</Link>
                        </li>
                        <li className="flex">
                            <Link to='/blog' className="flex md:items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-red-800">Blog</Link>
                        </li>
                    </ul>
                    <button onClick={() => setOpen(!open)} className="flex justify-end p-4 text-2xl md:hidden">

                        {
                            open ?
                                <i className="fa-solid fa-xmark"></i>
                                : <i className="fa-solid fa-bars "></i>
                        }
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;

/*  */