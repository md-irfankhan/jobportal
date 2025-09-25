import Apply from "../../components/Apply/Apply";
import Dashboard from "../../components/Dashboard/Dashboard";
import JobPost from "../../components/Dashboard/DashboardContent/JobPost/JobPost";
import Overview from "../../components/Dashboard/DashboardContent/Overview/Overview";
import Details from "../../components/Details/Details";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Private from "../../components/Private/Private";
import Register from "../../components/Register/Register";

const childRoutes=[
    {
        path:"/",
        Component:Home
    },
    {
        path:'/details/:id',
        loader:({params})=>fetch(`http://localhost:3000/job/${params.id}`),
        Component:Details
    },
    {
        path:'/dashboard',
        element:<Private><Dashboard></Dashboard></Private>,
        children:[
            {
                path:'overview',
                loader:async()=>{
                    const jobsF=await fetch('http://localhost:3000/jobs')
                    const applicationsF=await fetch('http://localhost:3000/applications')
                    const jobs= await jobsF.json()
                    const applications=await applicationsF.json()
                    return {jobs,applications}
                },
                Component:Overview
            },
            {
                path:'postjob',
                Component:JobPost
            }
        ]
    },
    {
        path:'/login',
        Component:Login
    },
    {
        path:'/register',
        Component:Register
    },
    {
        path:'/apply/:id',
        loader:({params})=>fetch(`http://localhost:3000/job/${params.id}`),
        element:<Private><Apply></Apply></Private>
    }
]
export default childRoutes;