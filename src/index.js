import React, {useState} from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
  Outlet,
} from "react-router-dom";
import App from './components/App';
import Home from "./components/Home";
import Profile from "./components/Profile";
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
  const [token, setToken] = useState("abc");
  return (
    <>
    <Navbar token={token} />
    <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Home />,
        
      },
      {
        path: "/posts",
        element: <App />,
      },
      {
        path: "/users/me",
        element: <Profile />,
      },
      {
        path: "/users/register",
        element: <Register />,
      },
      {
        path: "/users/login",
        element: <Login />,
      },
    ],
  },
 
]);


createRoot(document.getElementById("root")).render(
 
    <RouterProvider router={router} />
    
   
  
);
