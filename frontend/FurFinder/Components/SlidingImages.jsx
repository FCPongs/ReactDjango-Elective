import React from 'react'

const SlidingImages = ({slides}) => {
  return (
    <>
    <div className='w-screen h-[900px]'>
      <div className='w-full h-full bg-cover' style={{backgroundImage: `url(${slides[1].url})`}}></div>
    </div>
    </>
  )
}

export default SlidingImages