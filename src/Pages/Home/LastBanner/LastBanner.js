import React from 'react';
import treatment from '../../../assets/images/treatment.png'
const LastBanner = () => {
    return (
        <div className="hero my-20  hidden md:block">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className='px-20'>
                <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn bg-gradient-to-r from-primary to-secondary font-bold border-0 text-white">Get Started</button>
            </div>
            <img src={treatment} alt="" className="lg:w-[500px] rounded-lg shadow-2xl" />
        </div>
    </div>
    );
};

export default LastBanner;