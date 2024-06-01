'use client'

import React, { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const Hero = () => {

    const images = [
        'https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1564572234453-6b14f6e6fcfb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        "https://images.unsplash.com/photo-1619430041588-7417ab2a04dc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1591447337751-c7b95cf704ba?q=80&w=1044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1554246247-6993b606e8b9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1627926357525-aff29272a5ee?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1522205955123-895f7c4e5057?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        'https://images.unsplash.com/photo-1573148195900-7845dcb9b127?q=80&w=1040&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        "https://images.unsplash.com/photo-1546868871-0f936769675e?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        'https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ];
    
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
    
        return () => clearInterval(interval);
      }, []);
    
      return (
        <section className="w-full z-0 relative md:h-screen">
        <div className={`w-full  h-full bg-cover bg-center py-32 ${styles.fade}  `} style={{ 
          backgroundImage: `url(${images[currentImageIndex]})`,
          opacity: 0.8, // Set opacity value as needed
        }}>
          <div className="container sm:mt-72 mt-28  mx-auto text-center  text-[#852424]">
            {/* <h1 className="sm:text-5xl text-3xl font-extrabold md:mb-2 mb-10">The Perfect Electronics For You</h1> */}
            {/* <p className="text-xl  font-bold mb-12">Good food .. Good life</p> */}
            {/* <a href="#" className="bg-[#9b7b32]  text-white py-4 px-12 rounded-full hover:bg-[#755e26] hover:cursor-pointer">Learn More</a> */}
          </div>
        </div>
      </section>
  )
}



export default Hero