import React from 'react'

const OpeningHours = () => {
  return (
    <div className='mt-20 mb-36 mx-auto'>
      
      <div className='title flex justify-center sm:gap-2'>
            <span>
                <img src='https://www.crimsoncairo.com/images/timetable-decorator.png' alt='image'/>
            </span>
            <span className='text-[#9b7b32] font-mono font-bold sm:text-5xl text-4xl  text-center mt-9'>
                Opening Hours
            </span>
            <span>
                <img src='https://www.crimsoncairo.com/images/timetable-decorator2.png' alt='image'/>
            </span>
        </div>


            <div className='hours mt-10 flex justify-center sm:gap-20 gap-5 '>
                <div className='left  mt-10 flex flex-col '>
                    <span className='text-[#9b7b32]  sm:text-3xl text-xl text-center'>
                        Monday to Thursday
                    </span>
                    <span className='text-center mt-10 mb-5 font-bold sm:text-2xl text-xl text-[#3b4f34]'>9:00 AM</span>
                    <span className='text-center font-bold sm:text-2xl text-xl text-[#3b4f34]'>12:00 AM</span>
                </div>

                <div className='columnDivider'>
                    <img src='	https://www.crimsoncairo.com/images/column-divider.png' alt='column divider'/>
                </div>

                <div className='right mt-10 flex flex-col'>
                    <span className='text-[#9b7b32]  sm:text-3xl text-xl text-center'>
                       Friday &
                       Saturday
                    </span>
                    <span className='text-center mt-10 mb-5 font-bold sm:text-2xl text-xl text-[#3b4f34]'>9:00 AM</span>
                    <span className='text-center font-bold sm:text-2xl text-xl text-[#3b4f34]'>1:00 AM</span>   
                </div>

            </div>

    </div>
  )
}

export default OpeningHours
