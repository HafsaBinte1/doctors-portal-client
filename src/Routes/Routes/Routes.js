
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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    },
])
export default router;