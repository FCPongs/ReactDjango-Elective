import React from 'react'

const PetDisplayContainer = () => {
  return (
    <>
        //* Container
    <div className='flex justify-center mt-20 '>
        {/* Link to profile viewer */} 
        <Link to="/petprofile">
        <div className='flex w-80 h-[28rem] drop-shadow-2xl rounded bg-white '>
            {/* Content */} 
            <div className='flex flex-col '>
                 {/* Image */} 
                <div className='w-full '>
                    <img className='rounded-t-lg ' src="src\Components\Images\Profile[1].png" alt="Profile" />
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
    </>
  )
}

export default PetDisplayContainer