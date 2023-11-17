import {useRoutes} from "react-router-dom";
import Home from '../pages/Home/Home'
import Layout from "../components/Layout/Layout";
import Article from "../pages/Article/Article";
import Login from "../pages/Login/Login";
import AddArticles from "../pages/AddArticles/AddArticles";


export default function Router () {
    const routes = useRoutes([
        {
            path: '',
            element: <Layout/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/article/:id',
                    element: <Article/>
                },
                {
                    path: '/addarticle',
                    element: <AddArticles/>
                },
            ],

        },
        {
            path: '/loginAdmin',
            element: <Login/>
        }


    ]);
    return routes
}