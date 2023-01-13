import React from 'react';
import background from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const Contact = () => {
    return (
        <section className='py-10 my-10'
        style={{
            background: `url(${background})`,
            backgroundSize: 'cover'
        }}
    >
        <div>
            <h3 className='text-center text-primary font-bold text-xl'>Contact Us</h3>
            <h1 className='text-center text-2xl text-white'>Stay connected with us</h1>
        </div>
        <div className='flex justify-center mt-5'>
            <div className=''>
                <form>
                    <input type="text" placeholder="Email Eddress" className="input input-bordered max-w-xs block" />
                    <input type="text" placeholder="Subject" className="input input-bordered max-w-xs block mt-5" />
                    <textarea className="textarea textarea-bordered mt-5 w-full" placeholder="Your message"></textarea>
                </form>

            </div>
        </div>
        <div className='flex justify-center mt-3'>
            <PrimaryButton>Submit</PrimaryButton>
        </div>
    </section>
    );
};

export default Contact;