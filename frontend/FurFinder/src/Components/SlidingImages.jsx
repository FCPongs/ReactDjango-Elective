import React from 'react'

//** This component is a props so ({slides}) is the argument we will pass to slides
const SlidingImages = ({slides}) => {
    //* useState- For next and previous button 
  return (
    <>
    <div data-testid="sliding-container" className='w-screen h-[900px]'>
      <div className='w-full h-full bg-cover' style={{backgroundImage: `url(${slides[1].url})`}}></div>
    </div>
    </>
  )
}

export default SlidingImages