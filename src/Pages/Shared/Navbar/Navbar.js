import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut =  () =>{
         logOut()
        .then(() =>{})
        .catch(err => console.log(err))
    }
    const menuItems = <>
        <li className='font-bold'><Link to='/'>Home</Link></li>
        <li className='font-bold'><Link to='/appointment'>Appointment</Link></li>
        <li className='font-bold'><Link to='/about'>About</Link></li>
        <li className='font-bold'><Link to='/contact'>Contact us</Link></li>
        <li className='font-bold'><Link to='/reviews'>Reviews</Link></li>
        {
            user?.uid ?
              <>
               <li className='font-bold'><Link to='/dashboard'>Dashboard</Link></li>
                <li className='font-bold'> <button onClick={handleLogOut} className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Sign out</button></li>
               
              </>
                :
                <li className='font-bold'><Link to='/login'>Login</Link></li>}
    </>
    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;