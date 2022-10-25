import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layouts/Main';
import Header from '../pages/Header'
import Home from '../pages/Home'
import Classes from '../pages/Classes'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Blogs from '../pages/Blogs';
import Faq from '../pages/Faq';
import Category from '../pages/Category';
import CourseDetail from '../pages/CourseDetail';
import PrivateRoute from './PrivateRoute';
import Checkout from '../pages/Checkout';

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
                    loader: ({ params }) => fetch(`http://localhost:5000/classes/${params.id}`),
                    element: <Category></Category>
                },
                {
                    path: '/class/:id',
                    loader: ({ params }) => fetch(`http://localhost:5000/class/${params.id}`),
                    element: <CourseDetail></CourseDetail>
                },
                {
                    path: '/checkout',
                    element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
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