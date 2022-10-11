import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Question = ({ Quizquestions }) => {



    const { question, correctAnswer, options } = Quizquestions;
    const notify = () => {
        toast.success(`Answer is: ${correctAnswer}`, {
            position: "top-center",
            autoClose: 5000,
            draggable: false
        });
    }

    const findValue = (id) => {
        if (id === correctAnswer) {
            toast.success("👌 Wow You're Correct!", {
                position: "top-center",
                autoClose: 2000,
                draggable: false
            });
        } else {
            toast.error("❌ You're Wrong", {
                position: "top-center",
                autoClose: 2000,
                draggable: false,

            });
        }

    }
    return (
        <div className='bg-gray-200 p-8 justify-items-center border rounded dark:border-gray-900'>
            <div className='flex justify-evenly'>
                <p className='text-2xl font-bold mb-6'> Question: {question}
                </p>
                <button type="button" onClick={notify} className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800"><i className="fa-solid fa-eye text-2xl"></i> </button>
            </div>
            {
                options.map(option =>
                    <div key={option}>
                        <div className='text-2xl border rounded dark:border-gray-400 mb-5'>
                            <button type="button" id='buton' onClick={() => { findValue(option) }} className="px-8 py-3 font-semibold border rounded dark:border-gray-100 w-full hover:bg-slate-400 dark:text-gray-900">{option}</button>
                            <ToastContainer
                            />
                        </div>
                    </div>
                )
            }

            <p className='font-semibold'><i className="fa-solid fa-heart text-red-600 mr-2"></i>Choose the Correct Answer</p>

        </div>
    );
};

export default Question;