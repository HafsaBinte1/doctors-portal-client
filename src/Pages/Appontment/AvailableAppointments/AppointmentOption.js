import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots, price } = option
    return (
        <div className="card  shadow-xl ">
            <div className="card-body text-center">
                <h2 className="text-secondary font-semibold text-2xl">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces': 'space'} Available</p>
                
                <div className="card-actions justify-center">
                    <label
                    disabled= {slots.length === 0}
                    htmlFor="booking-modal" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
                    onClick={() => setTreatment(option)}
                    >Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;