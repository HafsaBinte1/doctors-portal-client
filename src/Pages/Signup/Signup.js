import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {createUser,  updateUser, signInWithGoogle} = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')

    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate()
    
    if(token){
        navigate('/')
    }
    const handleSignup = data =>{
        // console.log(data)
        setSignUpError('')
         createUser(data.email, data.password)
        .then(result => {
            const user = result.user
            console.log(user)
            toast('User created successfully')
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(() =>{
                saveUser(data.name, data.email)
              
            })
            .catch(err => {
                console.log(err)
               
            })
        })
        .catch(error =>{ 
            console.error(error)
            setSignUpError(error.message)})
    }

    const saveUser = (name, email) =>  {
        const user = { name, email }

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
         })
         .then(res => res.json())
         .then(data =>{
          setCreatedUserEmail(email)
         
         }) 
    }
   
    const handleWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithGoogle(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))

    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div className='w-96  p-7'>
            <h2 className='text-xl text-center mb-5 font-semibold'>Signup</h2>
            <form onSubmit={handleSubmit(handleSignup)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Name</span>
                    </label>
                    <input type="name" 
                     {...register("name",
                     {
                      required:"Name is required"
                     }
                    )} 
                     className="input input-bordered w-full max-w-xs" />
                      {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="email" 
                     {...register("email",
                     {
                      required:"Email Address is required"
                     }
                    )} 
                     className="input input-bordered w-full max-w-xs" />
                      {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input type="password"
                      {...register("password",
                    {
                      required:'Password is required',
                      minLength: {value: 6, message: 'Password must be 6 characters'}
                    })
                    } className="input input-bordered w-full max-w-xs" />
                      {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                </div>
                <input type="submit" value="Signup" className="my-3 w-full btn btn-accent" />
              <div>
              {signUpError && <p className='text-red-600'>{signUpError}</p>}
              </div>
            </form>
            <p className='font-semibold'>Already have an account? <Link className='text-secondary font-semibold' to='/login'> Please Login</Link></p>
            <div className="divider">OR</div>
            <button onClick={handleWithGoogle} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
        </div>
    </div>
    );
};

export default Signup;