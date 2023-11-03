import {useRoutes} from "react-router-dom";
import Home from '../pages/Home/Home'
import Layout from "../components/Layout/Layout";


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
            ]
        }


    ]);
    return routes
}