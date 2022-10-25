import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layouts/Main';
import Header from '../components/Header'
import Home from '../components/Home'
import Classes from '../components/Classes'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Blogs from '../components/Blogs';
import Faq from '../components/Faq';
import Category from '../components/Category';

const Routes = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Header></Header>
                },
                {
                    path: 'home',
                    element: <Home></Home>
                },
                {
                    path: 'classes',
                    loader: () => fetch('http://localhost:5000/classes'),
                    element: <Classes></Classes>

                },
                {
                    path: 'blogs',
                    element: <Blogs></Blogs>
                },
                {
                    path: 'faq',
                    element: <Faq></Faq>
                },
                {
                    path: 'login',
                    element: <Login></Login>
                },
                {
                    path: 'signup',
                    element: <SignUp></SignUp>
                },
                {
                    path: '/classes/:id',
                    loader:({params}) => fetch(`http://localhost:5000/classes/${params.id}`),
                    element: <Category></Category>
                },
                {
                    path: '*',
                    element: <h1>Sorry Route not found</h1>
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={routes}></RouterProvider>
        </div>
    );
};

export default Routes;