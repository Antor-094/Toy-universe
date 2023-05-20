import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/MainLayout/Main";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import NotFound from "../Pages/NotFound/NotFound";
import Blog from "../Pages/Blog/Blog";

import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToys from "../Pages/AddToys/AddToys";
import UpdateToy from "../Pages/MyToys/UpdateToy";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/myToys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
      },
      {
        path: "/addToys",
        element: <PrivateRoute><AddToys></AddToys></PrivateRoute>,
      },
      {
        path: "/toy/:id",
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader:()=> fetch('http://localhost:5000/allToy')
      },
      {
        path: 'updateToy/:id', 
        element: <UpdateToy></UpdateToy>, 
        loader: ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`)
      }
     
    ],
  },
]);
export default router;
