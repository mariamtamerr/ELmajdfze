'use client'

import React, { useEffect, useState } from 'react'

const Hero = () => {

    const images = [
        'https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1591815302525-756a9bcc3425?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1591815421748-5d50ffaf1ace?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1573148195900-7845dcb9b127?q=80&w=1040&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ];
    
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
    
        return () => clearInterval(interval);
      }, []);
    
      return (
        <section className="w-full z-0 relative md:h-screen">
        <div className="w-full  h-full bg-cover bg-center py-32" style={{ 
          backgroundImage: `url(${images[currentImageIndex]})`,
          opacity: 0.8, // Set opacity value as needed
        }}>
          <div className="container sm:mt-52 mt-28  mx-auto text-center  text-white">
            <h1 className="sm:text-5xl text-3xl font-extrabold md:mb-16 mb-10">The Perfect Mobile Phones For You</h1>
            {/* <p className="text-xl  font-bold mb-12">Good food .. Good life</p> */}
            {/* <a href="#" className="bg-[#9b7b32]  text-white py-4 px-12 rounded-full hover:bg-[#755e26] hover:cursor-pointer">Learn More</a> */}
          </div>
        </div>
      </section>
  )
}

export default Hero