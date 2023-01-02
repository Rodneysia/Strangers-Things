import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  useRouteError,
} from "react-router-dom";
import App from './components/App';
import Home from "./components/Home";
import Register from "./components/Register";
import Login from './components/Login'
import Navbar from './components/Navbar';
import './index.css';

const ErrorBoundary = () => {
  let error = useRouteError();
  console.error(error);
  return <div>Dang!</div>;
}

const AppLayout = () => {
  return (
    <>
    <Navbar />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/posts",
        element: <App />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/users/register",
        element: <Register />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/users/login",
        element: <Login />,
        errorElement: <ErrorBoundary />,
      },
    ]
  }
 
]);


createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={router} />
   
  
);
