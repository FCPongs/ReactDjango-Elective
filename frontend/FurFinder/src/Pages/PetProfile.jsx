import React from "react";
import NavBar from "../Components/NavBar";
import PetProfileContainer from "../Components/PetProfileContainer";
import background from "../Images/PetProfile (Background).png";
import AnimatedPage from "./AnimatedPage";

const PetProfile = () => {
  return (
    <>
    <div className="scrollbar-thin h-screen overflow-y-scroll overflow-x-hidden scrollbar-thumb-sky-500 scrollbar-track-white">
      <div
        className="bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${background})` }}
      >
        <NavBar />
        <AnimatedPage>
          <PetProfileContainer />
        </AnimatedPage>
      </div>
      </div>
    </>
  );
};

export default PetProfile;
