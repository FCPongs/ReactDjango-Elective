import React from 'react'
import NavBar from '../Components/NavBar'
import FindAPetContainer from '../Components/FindAPetContainer'
import AnimatedPage from './AnimatedPage'


const FindAPet = () => {
  return (
    <>
    <NavBar/>
    <AnimatedPage>
    <FindAPetContainer/>
    </AnimatedPage>
    
    </>
  )
}

export default FindAPet