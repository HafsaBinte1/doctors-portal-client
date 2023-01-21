import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    const {logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        .then(() => {
            navigate('/login')
        })
        .catch(error => console.error(error))
      }
    return (
        <div>
            <p className='text-red-500'>Something went wrong!!!</p>
            <p className='text-red-500'>{error.statusText || error.message}</p>
        <h2 className='text-3xl'>Please <button  onClick={handleLogOut} className=''>Sign out</button> and log back in</h2>
        </div>
    );
};

export default DisplayError;