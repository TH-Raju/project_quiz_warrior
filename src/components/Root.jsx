import { createBrowserRouter } from "react-router-dom";
import Main from "../layer/Main";
import Blog from "./Blog";
import Home from "./Home";
import Statistics from "./Statistics";
import Topics from "./Topics";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/topics',
                element: <Topics></Topics>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])