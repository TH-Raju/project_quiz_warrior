import { createBrowserRouter } from "react-router-dom";
import Main from "../layer/Main";
import Blog from "./Blog";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import QuizQuestion from "./QuizQuestion";
import Statistics from "./Statistics";
import Topics from "./Topics";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz')
                },
                element: <Home></Home>
            },
            {
                path: '/home',
                loader: async () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz')
                },
                element: <Home></Home>
            },
            {
                path: '/topics',
                loader: async () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz')
                },
                element: <Topics></Topics>
            },
            {
                path: 'quiz/:quizId',
                loader: async ({ params }) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
                },
                element: <QuizQuestion></QuizQuestion>
            },
            {
                path: '/statistics',
                loader: async () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz')
                },
                element: <Statistics></Statistics>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])