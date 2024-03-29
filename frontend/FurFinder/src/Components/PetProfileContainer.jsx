import React from 'react'

const PetProfileContainer = () => {
  return (
<>
{/* Container Div */}
<div className='flex h-[80vh] justify-center items-center'>
    {/* Container */}
    <div className='w-[70%] ' >

      <div className='flex w-[40%]'>
      {/* Image - Flexed */}
      <img className='shadow-2xl rounded-xl h-[320px] w-[450px] object-cover mr-10' src="src\Images\Profile[1].png" alt="Profile" />

      {/* Name and Description - Flexed*/}
      <div className='flex-col'>
        <div className='text-5xl font-semibold mb-5'>Cali</div>

        {/* Details */}
        <div className='flex gap-10 mb-5 font-medium'>
          <div className='bg-red-200 rounded-xl w-40 h-10 flex items-center'>
            <div className='p-4'>Age:</div>
          </div>
          <div className='bg-blue-200 rounded-xl w-40 h-10 flex items-center'>
          <div className='p-4'>Breed:</div>
          </div>
          <div className='bg-green-200 rounded-xl w-[200px] h-10 flex items-center'>
          <div className='p-4'>Date added:</div>
          </div>
        </div>

        <div className='text-justify overflow-auto h-[130px] w-[100%]'>        
          Cali is a charming and affectionate cat who is eagerly awaiting her forever home. 
          With her soft fur and endearing purr, she's sure to steal your heart from the moment you meet her.
          Cali is a charming and affectionate cat who is eagerly awaiting her forever home. 
          With her soft fur and endearing purr, she's sure to steal your heart from the moment you meet her.
          
          </div>
          
          
          <button class="mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Adopt
            </button>


      </div>


      </div>
      </div>
      </div>
    </>
  )
}

export default PetProfileContainer