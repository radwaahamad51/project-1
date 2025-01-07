import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Ragister";
import Home from "../component/Home";
import Additem from "../surver Item/AddItem";
import MyEquepment from "../surver Item/MyEquepment";
import PrivateRoute from "./privetRoute";
import AllSportsEquipmentPage from "../component/AllSportEqe";
import Homepage from "../component/homepage";
import ProductDetailsPage from "../component/view";
import Update from "../surver Item/update";
import NotFoundPage from "../Pages/notFound";
import AboutUs from "../design/AboutUs";
import ContactUs from "../design/ContactUs";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/login",
                element: <Login></Login>

            },
            {
                path: "/regester",
                element: <Register></Register>
            },
            {
                path: "/eqepment",
                element: <PrivateRoute><Additem></Additem></PrivateRoute>
            },

            {
                path: "/myequipment",
                element: <PrivateRoute><MyEquepment></MyEquepment></PrivateRoute>,
                loader: () => fetch('https://assignment-10-opal.vercel.app/allitem')
            },
            {
                path:"/allsporteq",
                element: <AllSportsEquipmentPage></AllSportsEquipmentPage>
            },
            {
                path: "/product-details/:id",  
                element: <PrivateRoute><ProductDetailsPage></ProductDetailsPage></PrivateRoute>
            },
            {
                path:'/',
                element: <Homepage></Homepage>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({params}) => fetch(`https://assignment-10-opal.vercel.app/allitem/${params.id}`)

            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>
            },

        ]
    },
   
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    },
    





]);


export default router;