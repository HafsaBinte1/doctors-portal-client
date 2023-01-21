import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import { FaPhotoVideo } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const imageHostKey = process.env.REACT_APP_imgbb_key

    const navigate = useNavigate()


    const {data: specialties, isLoading} = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty')
            const data = await res.json()
            return data;
        }
    })

    const handleAddDoctor = data =>{
        const image = data.image[0]
        const formData = new FormData();
        formData.append ('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url,  {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
           if(imgData.success){
            const doctor = {
                name: data.name,
                email: data.email,
                specialty: data.specialty,
                image: imgData.data.url
            }
            fetch('http://localhost:5000/doctors',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(doctor)
             } )
             .then(res => res.json())
             .then(result => {
                    toast.success(`${data.name} Doctor added success`)
                    navigate('/dashboard/managedoctors')
             })
           }
        })

        
    }
    if(isLoading){
       return <Loading></Loading>
    }
    return (
        <div className='w-96  p-7'>
            <h2 className='text-3xl font-semibold'>Add a new Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
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
                        <span className="label-text font-semibold">Specialty</span>
                    </label>
                    <select
                    {...register("specialty")}
                    className="select input-bordered  w-full max-w-xs mb-5">
                     {
                        specialties.map(specialty => <option
                        key={specialty._id}
                        value={specialty.name}>
                        {specialty.name}</option>)
                     }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs ">
                    <div className='flex justify-center' style={{ border: '1px dashed gray', padding: '10%' }}>
                        <label htmlFor="profile">
                            <div className='flex justify-center items-center flex-col'>
                                <h2 className='text-gray-500 mb-3'>upload your photo</h2>
                                <FaPhotoVideo className='text-3xl cursor-pointer text-gray-500 '></FaPhotoVideo>
                            </div>
                        </label>
                        <input type="file" id='profile'
                        {...register("image",
                            {
                              required: 'Photo is required',
                            })}
                        className="input input-bordered w-full max-w-xs hidden" />
                    {errors.img && <p className='text-red-600'>{errors.img.message}</p>}
                    </div>
                  
                </div>
                <input type="submit" value="Add Doctor" className="my-3 w-full btn btn-accent" />
              <div>
            
              </div>
            </form>
        </div>
    );
};

export default AddDoctor;