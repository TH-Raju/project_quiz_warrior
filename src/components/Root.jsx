import { createBrowserRouter } from "react-router-dom";
import Main from "../layer/Main";
import Home from "./Home";


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
            }
        ]
    }
])