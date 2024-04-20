import React from 'react'
import {Link} from 'react-router-dom';

const PetDisplayContainer = () => {
  return (
    <>
    <div data-testid="find-a-pet-container" className='flex h-[80vh] items-center justify-center'>
        {/* Container */} 
        <div className=''>
        {/* Link to profile viewer */} 
        <Link to="/PetProfile"> 
        <div className='flex w-80 h-[28rem] drop-shadow-2xl rounded bg-white hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] hover:scale-110 duration-300 ease-in-out'>
            {/* Content */} 
            <div className='flex flex-col '>
                 {/* Image */} 
                <div className='w-full '>
                    <img className='rounded-t-lg ' src="src\Images\Profile[1].png" alt="Profile" />
                </div>
                 {/* Name */} 
                <div className='text-center text-2xl font-bold my-1'>Cali</div>

                 {/* Description */} 
                <div className='overflow-auto'>
                    <p className='text-sm text-center mx-5'>
                    Cali is a charming and affectionate cat who is eagerly awaiting her forever home. 
                    With her soft fur and endearing purr, she's sure to steal your heart from the moment you meet her.
                    Cali is a charming and affectionate cat who is eagerly awaiting her forever home. 
                    With her soft fur and endearing purr, she's sure to steal your heart from the moment you meet her.
                        </p>
                </div>



            </div>
        </div>
        </Link>
    </div>
    </div>

    </>
  )
}

export default PetDisplayContainer