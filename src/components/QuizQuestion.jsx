import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const QuizQuestion = () => {
    const questions = useLoaderData().data.questions;
    return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 ml-16 mr-16 lg:ml-60 lg:grid-cols-2 ">
            {
                questions.map(Quizquestions => <Question
                    key={Quizquestions.id}
                    Quizquestions={Quizquestions}
                ></Question>)
            }
        </div>
    );
};

export default QuizQuestion;