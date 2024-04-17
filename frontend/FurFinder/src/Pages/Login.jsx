import React from "react";

const Login = () => {
  return (
    <>
    <div style={{ backgroundImage: "url('/src/Images/PolkaDot.png",backgroundSize:"cover" }}>
      {/** Center the div using flex  */}
      <div class="flex items-center justify-center h-screen">
        {/** Inside the centered div, set the width and height */}
        <div className="w-[100vh] h-[45vh] rounded-lg shadow-xl shadow-blue-700/90 bg-white">
          <div className="flex">
            {/** Welcome message div */}
            <div className="w-[40vh] h-[45vh]" style={{backgroundImage: "url('/src/Images/Logo.png')",backgroundSize: "70%",backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
              <div className="text-xl text-center font-bold p-4">
              </div>
            </div>

            {/** Login inputs div */}
            <div className="w-[60vh] h-[45vh]">
              <div className="text-center p-4 mt-5 font-bold text-3xl">Welcome to FurFinder</div>

              {/** Username input div */}
              <div className="p-4">
                <div></div>
                <input
                  type="text"
                  id="Username"
                  placeholder="Username"
                  className="border border-gray-400  rounded w-[55vh] h-[5vh] py-4 px-2"
                ></input>
              </div>

              {/** Password input div */}
              <div className="p-4">
                <input
                  type="text"
                  id="Password"
                  className="border border-gray-400  rounded w-[55vh] h-[5vh] py-4 px-2"
                  placeholder="Password"
                ></input>
              </div>

            {/** Login or Sign-up */}
            <div className="flex justify-center">
            <button type="button" className="w-[20vh] h-[5vh] flex items-center justify-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign-up</button>
            <button type="button" className="w-[20vh] h-[5vh] flex items-center justify-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
            </div>
              
            </div>
          </div>
        </div>
      </div>

      </div>
    </>
  );
};

export default Login;
