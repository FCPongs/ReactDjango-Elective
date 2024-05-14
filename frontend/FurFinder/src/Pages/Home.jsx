import SlidingImages from '../Components/SlidingImages'  //* Sliding Images Carousel Component
import NavBar from '../Components/NavBar'

  {/* Array of objects (Images to be used) */}
  const ImgSlides = [
    {url:'src/Images/FurFinderImageSL1.png', title: 'cat'},
    {url:'src/Images/FurFinderImageSL2.jpg', title: 'dog'}
  ]

  import React from 'react'
  
  const Home = () => {
    return (
      <>
     
      <div className='scrollbar-thin h-screen overflow-y-scroll overflow-x-hidden scrollbar-thumb-sky-500 scrollbar-track-white'>
      <NavBar/>
      <SlidingImages slides={ImgSlides}/>

      </div>

        {/* Sliding images component (as a prop) 
        <SlidingImages slides={ImgSlides}/> */}
      </>
    )
  }
  
  export default Home