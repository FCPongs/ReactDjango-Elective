import React from "react";
import NavBar from "../Components/NavBar";
import AnimatedPage from "./AnimatedPage";

const EditPet = () => {
  return (
    <>
    <div className="scrollbar-thin h-screen overflow-y-scroll overflow-x-hidden scrollbar-thumb-sky-500 scrollbar-track-white">
      <NavBar />
      <AnimatedPage>
        <div className="flex justify-center h-screen">
          <div className="flex flex-col w-[55vw] h-[60vh] mt-[10vh] rounded-md shadow-[5px_5px_10px_rgba(8,_112,_184,_0.7)] ">
            {/** Title */}
            <div className="flex w-[100%] items-center bg-orange-500 text-3xl font-bold rounded-t-lg shadow-md">
              <div className="m-[2vh] text-white">Edit Pet: </div>
              <div className="text-white underline underline-offset-4">
                PetName
              </div>
            </div>

            <div className="flex  h-[90%] w-[100%] pr-4 scrollbar-thin overflow-y-scroll overflow-x-hidden scrollbar-thumb-sky-500 scrollbar-track-white">
              <div className="flex flex-col font-bold  w-[50%]">
                {/** Name */}
                <div className="p-2">
                  <div className="font-bold">Name: </div>
                  <input
                    type="text"
                    id="name"
                    className="border border-gray-400 rounded w-[100%] h-[5vh] py-4 px-2"
                    placeholder="Edit name"
                  ></input>
                </div>
                {/** Type  and Age */}
                <div className="flex w-[100%] items-center">
                  <div className="p-2 w-[60%]">
                    <div className="font-bold">Type: </div>
                    <input
                      type="text"
                      id="name"
                      className="border border-gray-400 rounded w-[100%] h-[5vh] py-4 px-2"
                      placeholder="Edit type"
                    ></input>
                  </div>

                  <div className="p-2 w-[40%]">
                    <div className="font-bold">Age: </div>
                    <input
                      type="number"
                      id="breed"
                      className="border border-gray-400  rounded w-[100%] h-[5vh] py-4 px-2"
                      placeholder="Edit age"
                      min="0"
                      max="30"
                    ></input>
                  </div>
                </div>
                {/** Image */}
                <div className="flex justify-center mt-2">
                  <div className=" p-2 border rounded-lg border-slate-500/25 shadow-md w-[95%]">
                    <div className="font-bold">Image: </div>
                    <div className="p-1">
                      <input
                        type="file"
                        id="file"
                        className="rounded w-[100%] h-[6vh] py-2 px-1"
                        placeholder="Age"
                        min="0"
                        max="30"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" h-[100%] w-[50%]">
                <div className="p-2">
                  <div className="font-bold">Description: </div>
                  <textarea
                    id="message"
                    rows="3"
                    className="shadow-md block p-2.5 w-[26vw] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write the description here..."
                  ></textarea>

                  <div className="p-2">
                    <div className="font-bold">Breed: </div>
                    <div className="1">
                      <input
                        type="text"
                        id="breed"
                        className="border border-gray-400  rounded w-[100%] h-[5vh] py-4 px-2"
                        placeholder="Breed"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end p-4">
              <button
                type="button"
                className="w-[20vh] h-[5vh] flex items-center justify-center text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
        
      </AnimatedPage>
      </div>
    </>
  );
};

export default EditPet;
