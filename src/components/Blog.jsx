import React from 'react';

const Blog = () => {
    return (
        <div className="dark:bg-gray-200 dark:text-gray-900">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 dark:text-gray-700">Here are the Some important Question </p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is the purpose of react router scelerisque?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-700">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does Context API work?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-700">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is useref and what is used for?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-700">useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
                    </details>
                </div>
            </div>
        </div>
    );
};

export default Blog;