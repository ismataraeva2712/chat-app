import React from 'react';
import pic from './img/pic.jpg'
import b from './img/b.png'

const Banner = () => {
    return (
        <div>
          <div className="hero min-h-screen  " >
  <div className="hero-content flex-col lg:flex-row-reverse">
  <div
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="60"
                        data-aos-duration="1200"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                    >
    <img src={pic}  className="max-w-sm rounded-lg shadow-2xl" />
    </div>
    <div
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="60"
                        data-aos-duration="1200"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"

                    >
    <div>
      <h1 className="text-5xl font-bold">Real Time Official Easy Chat</h1>
      <p className="py-6">Its a real time chatting app.in your company or business organization use it easily.All members can use it and all member chatting in real time </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;