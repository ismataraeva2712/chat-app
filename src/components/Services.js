import React from 'react';
import p1 from './img/p1.jpg'
import p2 from './img/p2.jpg'
import p3 from './img/p3.jpg'
import {AiFillCheckCircle } from 'react-icons/ai';
const Services = () => {
    return (
        <div className='px-12 mx-auto'>
            <h1 className='text-primary text-center text-3xl font-bold my-12'>Our <span className='text-neutral'>Plan</span></h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={p2} className='h-[350px] w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Free</h2>
                        <div className='flex justify-center items-center'>
                        <AiFillCheckCircle  className='text-primary text-xl' />
                        <p className='mr-40'>24/5 Live Chat</p>
                        </div>
                        <div className='flex justify-center items-center'>
                        <AiFillCheckCircle  className='text-primary text-xl' />
                        <p className='mr-40'>Visitor Notes-Info</p>
                        </div>
                        <div className='flex justify-center items-center'>
                        <AiFillCheckCircle  className='text-primary text-xl' />
                        <p className='mr-40'>Quick Responses</p>
                        </div>
                        <div className='flex justify-center items-center'>
                        <AiFillCheckCircle  className='text-primary text-xl' />
                        <p className='mr-40'>Responsive Apps</p>
                        </div>
                    </div>
                </div>
                {/* = */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={p3} className='h-[350px] ' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Starter</h2>
                        <div className='flex justify-center items-center'>
                        <AiFillCheckCircle  className='text-primary text-xl' />
                        <p className='mr-40'>24/6 Live Chat</p>
                        </div>
                        <div className='flex justify-center items-center'>
                        <AiFillCheckCircle  className='text-primary text-xl' />
                        <p className='mr-40'>Visitor Notes-Info</p>
                        </div>
                        <div className='flex justify-center items-center'>
                        <AiFillCheckCircle  className='text-primary text-xl' />
                        <p className='mr-40'>Quick Responses</p>
                        </div>
                        <div className='flex justify-center items-center'>
                        <AiFillCheckCircle  className='text-primary text-xl' />
                        <p className='mr-40'>Responsive Apps</p>
                        </div>
                    </div>
                </div>
                {/* = */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={p1} className='h-[350px] w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Professional</h2>
                        <div className='flex justify-center items-center'>
                        <AiFillCheckCircle  className='text-primary text-xl' />
                        <p className='mr-40'>24/7 Live Chat</p>
                        </div>
                        <div className='flex justify-center items-center'>
                        <AiFillCheckCircle  className='text-primary text-xl' />
                        <p className='mr-40'>Visitor Notes-Info</p>
                        </div>
                        <div className='flex justify-center items-center'>
                        <AiFillCheckCircle  className='text-primary text-xl' />
                        <p className='mr-40'>Quick Responses</p>
                        </div>
                        <div className='flex justify-center items-center'>
                        <AiFillCheckCircle  className='text-primary text-xl' />
                        <p className='mr-40'>Responsive Apps</p>
                        </div>
                       
                    </div>
                </div>        </div>
            <div className='text-center  my-12'>

            </div>
        </div>
    );
};

export default Services;