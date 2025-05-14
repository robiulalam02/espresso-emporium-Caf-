import {
    createBrowserRouter,
} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import Home from "../pages/Home";
import AddCoffee from "../components/AddCoffee/AddCoffee";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/add-coffee',
                Component: AddCoffee,
            }
        ]
    },
]);