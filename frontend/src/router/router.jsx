import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import childRoutes from "./childRoutes/childRoutes";

const router=createBrowserRouter([
    {
        path:"/",
        Component:Layout,
        children:childRoutes
    }
])

export default router;