import React from "react";
import NavBar from "../Components/NavBar";
import AnimatedPage from "./AnimatedPage";
import missionImage from "../Images/missionImage.jpg";
import visionImage from "../Images/visionImage.jpg";

const AboutUs = () => {
  return (
    <>
    <div className='scrollbar-thin h-screen overflow-y-scroll overflow-x-hidden scrollbar-thumb-sky-500 scrollbar-track-white'>
      <NavBar />
      <AnimatedPage>
          <div className="p-relative pb-[50px] bg-[#0cc0df]">
              <div className="w-full flex justify-center"> 
              <h1 className="text-6xl font-semibold mb-6 mt-8 ">About FurFinder</h1>
                </div>
                <p className="text-gray-600 font-semibold text-lg pl-2 pr-2">
                  Welcome to FurFinder, your go-to pet adoption website! Our mission is simple: to find forever homes for cats and dogs in need. 
                  Whether you’re looking for a playful kitten or a loyal canine companion, we’re here to help you make that perfect match. 
                  Our team of dedicated volunteers and experienced staff work tirelessly to ensure that each adoption is a joyful and successful experience. 
                  Join us in making a difference—one paw at a time!
                </p>
             </div>

 <div className="flex mt-[200px] items-center">
  <div className="w-1/2 pl-8 pr-3">
    <h1 className="text-3xl font-semibold mb-6">Our Mission</h1>
    <p className="text-gray-600 font-semibold">
      At FurFinder, our mission is to connect loving homes with adorable pets. 
      We strive to find forever homes for cats and dogs in need, ensuring that each adoption is a joyful and successful experience. 
      Our dedicated volunteers and experienced staff work tirelessly to make a difference—one paw at a time.
    </p>
  </div>
  <div className="w-1/2 drop-shadow-2xl">
    <img src={missionImage} alt="Mission Image" className="pr-2 mb-4 w-full rounded-2xl drop-shadow-2xl" /> {/* Adjust the width as needed */}
  </div>
</div>



<div className="flex mt-[200px] items-center drop-shadow-2xl">
  <img src={visionImage} alt="Mission Image" className="pl-2 w-1/2 mb-4 rounded-2xl drop-shadow-2xl" />
  <div className="w-1/2 pl-8 pr-3">
    <h1 className="text-3xl font-semibold mb-6">Our Vision</h1>
    <p className="text-gray-600 font-semibold">
    At FurFinder, we envision a world where every pet finds a loving home. 
    Our dream is to create a community where pet adoption is accessible, compassionate, and celebrated. 
    Through education, advocacy, and heartfelt connections, we strive to build a brighter future for both pets and their human companions.
    </p>
  </div>
</div>


      </AnimatedPage>
      </div>
    </>
  );
};

export default AboutUs;