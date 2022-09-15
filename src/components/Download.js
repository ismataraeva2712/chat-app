import React from 'react';
import chat from './img/chat.png'
import playstore from './img/playstore.png'
import applestore from './img/applestore.png'
const Download = () => {
    return (
        <div className='text-center '>
        <div className="card  bg-base-100 shadow-xl ">
        <div className='flex justify-center items-center text-start'>
            <figure><img src={chat} className='w-96 p-3 lg:mr-64' alt="Shoes" /></figure>
            <div className="card-body ml">
           
              
              
                <h2 className="card-title text-center text-primary font-bold text-3xl">Download App</h2>
                <div className='flex justify-start items-center '>
                <div class="card w-40 bg-base-100 shadow-xl mr-12">
  <div class="card-body">
  <img src={playstore} className='h-[70px] w-[80px] p-3' alt="Shoes" />
    <p className='text-primary font-semibold'> Play Store</p>
   
  </div>
</div>
                <div class="card w-40 bg-base-100 shadow-xl">
  <div class="card-body">
  <img src={applestore} className='h-[70px] w-[80px] p-3' alt="Shoes" />
    <p className='text-primary font-semibold'>App Store</p>
   
  </div>
</div>
</div>             
            </div>
            </div>
        </div>
        </div>
    );
};

export default Download;