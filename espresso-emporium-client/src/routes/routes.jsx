import {
    createBrowserRouter,
} from "react-router";
import MainLayout from "../layouts/MainLayout";

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
    },
]);