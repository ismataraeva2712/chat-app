import React from 'react';
import woman1 from './img/woman1.png'
import man1 from './img/man1.png'
import {AiFillStar} from 'react-icons/ai';
const Reviews = () => {
    return (
        <div  className='px-12 mx-auto my-12'>
            <h1 className='text-primary text-center text-3xl font-bold my-12'>Whats Our Clients Said About  <span className='text-neutral'>Easy Chat</span></h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-10 '>
            <div className="card  bg-base-100 shadow-xl ">
                <div className='flex justify-center items-center text-start'>
                    <figure><img src={woman1} className='w-96 p-3' alt="Shoes" /></figure>
                    <div className="card-body">
                   
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consequatur impedit eius hic animi aspernatur repudiandae natus tempore magni veniam?</p>
                       <div className='flex justify-start items-center '> <AiFillStar  className='text-primary text-xl' />
                        <AiFillStar  className='text-primary text-xl' />
                        <AiFillStar  className='text-primary text-xl' />
                        <AiFillStar  className='text-primary text-xl' />
                        <AiFillStar  className='text-primary text-xl' /></div>
                        <h2 className="card-title text-center">Sarah Tailor</h2>
                    <p className='text-primary font-bold'>CEO at manila </p>
                       
                    </div>
                    </div>
                </div>
            <div className="card bg-base-100 shadow-xl ">
                <div className='flex justify-center items-center text-start'>
                    <figure><img src={man1}  className='w-96 p-3' alt="Shoes" /></figure>
                    <div className="card-body">
                   
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consequatur impedit eius hic animi aspernatur repudiandae natus tempore magni veniam?</p>
                       <div className='flex justify-start items-center '> <AiFillStar  className='text-primary text-xl' />
                        <AiFillStar  className='text-primary text-xl' />
                        <AiFillStar  className='text-primary text-xl' />
                        <AiFillStar  className='text-primary text-xl' />
                        <AiFillStar  className='text-primary text-xl' /></div>
                        <h2 className="card-title text-center">Stiven Smith</h2>
                    <p className='text-primary font-bold'>CEO at envator</p>
                       
                    </div>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default Reviews;