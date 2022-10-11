import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const QuizQuestion = () => {
    const questions = useLoaderData().data.questions;
    return (
        <div>
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