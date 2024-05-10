import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../components/errorPage/ErrorPage";
import Rooms from "../pages/Rooms";
import MyBooking from "../pages/MyBooking";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"/rooms",
            element: <Rooms></Rooms>
        },
        {
            path:"/myBooking",
            element: <MyBooking></MyBooking>
        },
        {
            path:"/about",
            element: <AboutUs></AboutUs>
        },
        {
            path:"/contact",
            element: <ContactUs></ContactUs>
        },
      ]
    },
  ]);
  export default router;