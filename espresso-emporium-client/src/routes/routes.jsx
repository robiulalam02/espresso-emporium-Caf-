import {
    createBrowserRouter,
} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import Home from "../pages/Home";
import AddCoffee from "../components/AddCoffee/AddCoffee";
import CoffeeDetails from "../components/CoffeeDetails/CoffeeDetails";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";
import Signup from "../components/Signup/Signup";
import Signin from "../components/Signin/Signin";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('http://localhost:3000/coffees')
            },
            {
                path: '/add-coffee',
                Component: AddCoffee,
            },
            {
                path: '/coffees/:id',
                Component: CoffeeDetails,
                loader: ({params})=>fetch(`http://localhost:3000/coffees/${params.id}`)
            },
            {
                path: '/edit-coffee/:id',
                Component: UpdateCoffee,
                loader: ({params})=>fetch(`http://localhost:3000/coffees/${params.id}`)
            },
            {
                path: '/auth/signup',
                Component: Signup
            },
            {
                path: '/auth/signin',
                Component: Signin
            }
        ]
    },
]);