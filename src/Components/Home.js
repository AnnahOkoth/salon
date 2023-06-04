import React from 'react';



function Hero() {
  return (
    <div className="flex flex-col lg:flex-row text-green-800 rounded-sm bg-red-100  items-center justify-evenly min-h-screen ">
      <div className="m-4 flex flex-col gap-4">
        <h1 className="text-3xl lg:text-6xl font-bold leading-tight text-center">
          We Care About 
          <br />
          Your Hair
        </h1>
        <p className=" leading-relaxed text-center line-clamp-4">
          "Discover your own style. Don't try to repeat what has already been
          written - have the courage to do your own thing and don't be afraid to
          do something different."
        </p>
       <div className="flex justify-center">
       <button className="bg-blue-500 p-3 text-white w-32 rounded-full">
          About Us
        </button>
       </div>
      </div>
      <div>
        <img className="hidden lg:block" src="pod.png" alt="Pod" />
      </div>
    </div>
  );
}

export default Hero;
