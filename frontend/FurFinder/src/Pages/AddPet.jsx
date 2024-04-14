import React from "react";
import NavBar from "../Components/NavBar";

const AddPet = () => {
  return (
    <>
      <NavBar />
      {/** Name, animal type, breed, age, image, description */}

      {/** Outside div to consume the whole width and height*/}
      <div className="flex justify-center h-screen">
        {/** Div box*/}
        <div className="flex flex-col w-[55vw] h-[65vh] mt-[10vh] rounded-md shadow-[5px_5px_10px_rgba(8,_112,_184,_0.7)]">
          {/** Title */}
          <div className="w-[100%] bg-indigo-600 text-3xl font-bold rounded-t-lg shadow-md">
            <div className="m-[2vh] text-white">Add Pet</div>
          </div>

          {/** Name and Type*/}
          <div className="flex justify-start space-x-4 p-2 w-[100%] mt-2 mx-4">
            {/** Name */}
            <div className="p-2 border rounded-lg border-slate-500/25 shadow-md">
              <div className="font-bold">Name: </div>
              <div className="p-2">
                <input
                  type="text"
                  id="name"
                  className="border border-gray-400 rounded w-[20vw] h-[5vh] py-4 px-2"
                  placeholder="Name"
                ></input>
              </div>
            </div>
            {/** Type */}
            <div className="p-2 border rounded-lg border-slate-200 shadow-md">
              <div className="font-bold">Type: </div>
              <div className="p-2">
                <input
                  type="text"
                  id="type"
                  className="border border-gray-400  rounded w-[15vw] h-[5vh] py-4 px-2"
                  placeholder="Type"
                ></input>
              </div>
            </div>
          </div>

          {/** Breed, Age, Image*/}
          <div className="flex justify-start space-x-4 p-2 mx-4">
            {/** Breed */}
            <div className="p-2 border rounded-lg border-slate-500/25 shadow-md">
              <div className="font-bold">Breed: </div>
              <div className="1">
                <input
                  type="text"
                  id="breed"
                  className="border border-gray-400  rounded w-[15vw] h-[5vh] py-4 px-2"
                  placeholder="Breed"
                ></input>
              </div>
            </div>
            {/** Age */}
            <div className="p-2 border rounded-lg border-slate-500/25 shadow-md">
              <div className="font-bold">Age: </div>
              <div className="p-1">
                <input
                  type="number"
                  id="breed"
                  className="border border-gray-400  rounded w-[15vw] h-[5vh] py-4 px-2"
                  placeholder="Age"
                  min="0"
                  max="30"
                ></input>
              </div>
            </div>
            {/** Image */}
            <div className="p-2 border rounded-lg border-slate-500/25 shadow-md">
              <div className="font-bold">Image: </div>
              <div className="p-1">
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
          </div>

          {/** Description */}
          <div className="p-2 flex justify-start mx-4">
            <div>
              <div className="font-bold">Description: </div>
              <textarea
                id="message"
                rows="2"
                className="shadow-md block p-2.5 w-[52vw] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write the description here..."
              ></textarea>
            </div>
          </div>

          {/** Add Button */}
          <div className="flex justify-end p-5">
            <button
              type="button"
              className="w-[20vh] h-[5vh] flex items-center justify-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPet;
