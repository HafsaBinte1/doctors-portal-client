
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Contact from '../../Pages/Home/Contact/Contact';
import Home from '../../Pages/Home/Home/Home';
import About from '../../Pages/About/About';
import Login from '../../Pages/Login/Login';
import Testimonal from '../../Pages/Home/Testimonial/Testimonial';
import Appointment from '../../Pages/Appontment/Appontment/Appontment';
import Signup from '../../Pages/Signup/Signup';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import DashboardLayout from '../../Layout/DashboardLayout';
import MyAppointment from '../../Pages/Dashboard/MyAppointment/MyAppointment';
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';
import AdminRoute from '../AdminRoute/AdminRoute';
import AddDoctor from '../../Pages/Dashboard/AddDoctor/AddDoctor';
import ManageDoctors from '../../Pages/Dashboard/ManageDoctors/ManageDoctors';
import Payment from '../../Pages/Dashboard/Payment/Payment';
import DisplayError from '../../Pages/Shared/DisplayError/DisplayError';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>,
            },
            {
                path: '/about',
                element:<About></About>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
            {
                path: '/reviews',
                element: <Testimonal></Testimonal>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <Signup></Signup>,
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>, 
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    },
])
export default router;