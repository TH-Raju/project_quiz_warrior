import React from 'react';

const Question = ({ Quizquestions }) => {
    const { question, correctAnswer, options } = Quizquestions;
    return (
        <div>
            <p> Question: {question}</p>
            {
                options.map(option =>
                    <div key={option.id}>
                        <input type="radio" name="JTP" id="showAgain" className="rounded-sm focus:ring-violet-400 focus:dark:border-violet-400 focus:ring-2 accent-violet-400" />
                        <label for="showAgain" className="text-sm cursor-pointer dark:text-gray-400">{option}</label>
                    </div>
                )
            }

            <p>{correctAnswer}</p>

        </div>
    );
};

export default Question;