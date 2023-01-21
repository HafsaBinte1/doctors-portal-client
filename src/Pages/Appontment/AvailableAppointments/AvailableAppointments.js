import React, {  useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointments = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, 'PP')

    const {data : appointmentOptions  = [], refetch, isLoading} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = res.json()
            return data;
        }
    })
   
    if(isLoading){
    return <Loading></Loading>
    }

    return (
        <section className='mt-16'>
               <p className='text-secondary font-bold text-center mt-20 mb-10'>You have selected date: {format(selectedDate, 'PP')}</p>
               <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                appointmentOptions.map(option => <AppointmentOption
                 key ={option._id}
                 option={option}
                 setTreatment={setTreatment}
                 ></AppointmentOption>)
                }
               </div>
               {
                treatment &&
               <BookingModal
               treatment={treatment}
               selectedDate={selectedDate}
               setTreatment={setTreatment}
               refetch={refetch}
               ></BookingModal>
               }
        </section>
    );
};

export default AvailableAppointments;