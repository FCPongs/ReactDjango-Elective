import SlidingImages from '../Components/SlidingImages'  //* Sliding Images Carousel Component

  {/* Array of objects (Images to be used) */}
  const ImgSlides = [
    {url:'src/Components/Images/FurFinderImageSL1.png', title: 'cat'},
    {url:'src/Components/Images/FurFinderImageSL2.jpg', title: 'dog'}
  ]

  import React from 'react'
  
  const Home = () => {
    return (
      <>
        {/* Sliding images component (as a prop) */}
        <SlidingImages slides={ImgSlides}/>
      </>
    )
  }
  
  export default Home