import React from "react";
import AdoptButton from "./Button";

const ApplicationForm = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      {/** Parent Div */}
      <div className="flex flex-col relative w-[35vw] h-[60vh] rounded-md shadow-[5px_5px_10px_rgba(8,_112,_184,_0.7)]">
        {/** Title */}
        <div className="w-[100%] bg-indigo-600 overflow-hidden text-3xl font-bold rounded-t-lg shadow-md">
          <div className="m-[2vh] text-white">Adoption Form</div>
        </div>

        {/** Name, contact number, email, identification card */}
        <div className="flex flex-wrap  h-[70%] overflow-hidden">
          {/** Name*/}
          <div className="w-[50%] p-3">
            <div className="font-bold">Name</div>
            <input
              type="text"
              id="name"
              className="border border-gray-400 rounded w-[100%] h-[5vh] py-4 px-2"
              placeholder="Name"
            ></input>
          </div>
          <div className="w-[50%]">
            <div className="p-3">
              {/** Contact*/}
              <div className="font-bold">Contact no.</div>
              <input
                type="text"
                id="name"
                className="border border-gray-400 rounded w-[100%] h-[5vh] py-4 px-2"
                placeholder="Contact"
              ></input>
            </div>
          </div>
          <div className="w-[100%] p-4">
            {/** Email */}
            <div className="font-bold">Email</div>
            <input
              type="text"
              id="name"
              className="border border-gray-400 rounded w-[100%] h-[5vh] py-4 px-2"
              placeholder="Email"
            ></input>
          </div>
          <div className="w-[50%] p-4">
            <div className="font-bold">Address</div>
            <input
              type="text"
              id="name"
              className="border border-gray-400 rounded w-[100%] h-[5vh] py-4 px-2"
              placeholder="Contact"
            ></input>
          </div>
          <div className="w-[50%] p-4">
            <div className="font-bold">Identification Card</div>
            <input
              type="file"
              id="file"
              className="rounded w-[15vw] h-[6vh] py-2 px-1"
              placeholder="Age"
              min="0"
              max="30"
            ></input>
          </div>
        </div>

        <div className="flex items-end justify-end h-[15%] p-4 ">
          <AdoptButton buttonText="Submit" />
        </div>
      </div>
    </div>
  );
};
export default ApplicationForm;
