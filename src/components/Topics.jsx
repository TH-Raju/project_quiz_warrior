import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from './QuizCard';

const Topics = () => {
    const quizes = useLoaderData().data;
    return (
        <div className="grid grid-cols-1 gap-x-4 gap-y-8  justify-items-center md:grid-cols-2 lg:grid-cols-4">
            {
                quizes.map(quiz => <QuizCard
                    key={quiz.id}
                    quiz={quiz}
                ></QuizCard>)
            }
        </div>
    );
};

export default Topics;