import React from 'react'
import NavBar from '../Components/NavBar'
import PetProfileContainer from '../Components/PetProfileContainer'
import background from '../Images/PetProfile (Background).png'
import AnimatedPage from './AnimatedPage'

const PetProfile = () => {
  return (
    <> 
<div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${background})`}}>
        <NavBar />
        <AnimatedPage>
        <PetProfileContainer />
        </AnimatedPage>
        
      </div>
    

    </>
  )
}

export default PetProfile