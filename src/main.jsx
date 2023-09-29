import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import SignIn from './Components/Sign in/SignIn';
import SignUp from './Components/SignUP/SignUp';
import HeroSingup from './Components/Hero/heroSingup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/sign in',
        element: <SignIn></SignIn>,
      },
      {
        path: '/Sign up',
        element: <SignUp></SignUp>
      },
      {
        path: '/sign up Hero',
        element: <HeroSingup></HeroSingup>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
