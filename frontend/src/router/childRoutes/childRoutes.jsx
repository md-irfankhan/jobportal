import Dashboard from "../../components/Dashboard/Dashboard";
import Details from "../../components/Details/Details";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";

const childRoutes=[
    {
        path:"/",
        Component:Home
    },
    {
        path:'/details',
        Component:Details
    },
    {
        path:'/dashboard',
        Component:Dashboard
    },
    {
        path:'/login',
        Component:Login
    },
    {
        path:'/register',
        Component:Register
    }
]
export default childRoutes;