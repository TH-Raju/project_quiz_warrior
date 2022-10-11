import { Link } from 'react-router-dom';


const QuizCard = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    return (
        <div className="flex flex-col flex-2 p-8">
            <Link to={`../quiz/${id}`}>
                <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <img src={logo} alt="quizCard" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                            <p className="dark:text-gray-100">Total: {total} Quiz</p>
                        </div>
                        <Link to={`../quiz/${id}`}>
                            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Start</button>
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default QuizCard;