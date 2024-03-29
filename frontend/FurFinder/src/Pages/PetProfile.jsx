import React from 'react'
import NavBar from '../Components/NavBar'
import PetProfileContainer from '../Components/PetProfileContainer'
import background from '../Images/PetProfile (Background).png'

const PetProfile = () => {
  return (
    <> 
<div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${background})`}}>
        <NavBar />
        <PetProfileContainer />
      </div>
    

    </>
  )
}

export default PetProfile