import Details from "../../components/Details/Details";
import Home from "../../components/Home/Home";

const childRoutes=[
    {
        path:"/",
        Component:Home
    },
    {
        path:'/details',
        Component:Details
    }
]
export default childRoutes;