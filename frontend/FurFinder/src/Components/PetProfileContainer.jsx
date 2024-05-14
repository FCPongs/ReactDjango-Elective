import React from "react";
import { Link } from "react-router-dom";
import AdoptButton from "./Button";

const PetProfileContainer = () => {
  return (
    <>
      {/** Parent Container Div */}
      <div className="flex items-center justify-center w-[100vw] h-[85vh] overflow-hidden">
        {/** Main container- Flex Row */}
        <div className="flex w-[70vw] h-[80vh] items-center">
          {/** Image */}
          <img
            className="shadow-2xl rounded-xl h-[320px] w-[25vw] object-cover mr-5"
            src="src\Images\Profile[1].png"
            alt="Profile"
          />

          {/** Name and Details- Flex Col */}
          {/** Parent Div */}
          <div className="flex flex-col p-5 rounded-lg border-2 w-[100%] h-[55vh] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
            {/** Name */}
            <div className="text-5xl font-semibold mb-5">Cali</div>

            {/** Details */}
            <div className="flex gap-5 mb-5 font-medium text-l ">
              <div className="bg-red-200 rounded-xl w-[100px] h-10 flex items-center">
                <div className="p-4">Age:</div>
              </div>
              <div className="bg-blue-200 rounded-xl w-[150px] h-10 flex items-center">
                <div className="p-4">Breed:</div>
              </div>
              <div className="bg-green-200 rounded-xl w-[200px] h-10 flex items-center">
                <div className="p-4">Date Added:</div>
              </div>
            </div>

            <div className="flex flex-col justify-between h-[60%] overflow-hidden">
            {/** Description */}
            <div className="text-justify text-xl w-[100%] h-[80%]  overflow-auto ">
              Cali is a charming and affectionate cat who is eagerly awaiting
              her forever home. With her soft fur and endearing purr, she's sure
              to steal your heart from the moment you meet her. Cali is a
              charming and affectionate cat who is eagerly awaiting her forever
              home. With her soft fur and endearing purr, she's sure to steal
              your heart from the moment you meet her. 
              Cali is a
              charming and affectionate cat who is eagerly awaiting her forever
              home. With her soft fur and endearing purr, she's sure to steal
              your heart from the moment you meet her. 
            </div>
            </div>
            <div className="flex justify-end items-end mt-auto">
            <Link to="/Application">
              <AdoptButton buttonText="Adopt"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PetProfileContainer;
