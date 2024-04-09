import LogoImage from "../Images/Logo.png";
import { Link } from "react-router-dom";

import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/** Div wrapper    */}

      <div className="flex items-center justify-between bg-[#ffffff] shadow-xl h-24">
        <div className="flex items-center">
          <img src={LogoImage} alt="Logo" className="h-20 ml-5 mr-5" />
          <h1 className="text-2xl font-bold">FurFinder</h1>
        </div>

        <ul className="flex text-l ">
          {/** Home */}
          <li className="p-4 hover:underline">
            <Link to="/">Home</Link>
          </li>
          {/** About Us */}
          <li className="p-4 hover:underline" a href="#">
            <a href="#">About us</a>
          </li>
          {/** Contact Us */}
          <li className="p-4 hover:underline">
            <a href="#">Contact us</a>
          </li>
          {/** Find a Pet */}
          <li className="p-4 hover:underline">
            <Link to="/FindAPet">Find a pet</Link>
          </li>

          {/** Manage Pets */}
          <div className="p-4 relative">
            {/** Button dropdown*/}
            <div onClick={() => setOpen((prev) => !prev)}>Manage pets</div>

            {isOpen && (
              <>
                <div className="absolute">
                  <li className="cursor-pointer hover:bg-slate-500">Add Pet</li>
                  <li>Edit Pet</li>
                  <li>Delete Pet</li>
                </div>
              </>
            )}
          </div>
        </ul>

        <div className="flex items-center">
          <form action="" className="ml-10 mr-10">
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="rounded-md h-9 w-34 border-b-2 border-indigo-500 outline-none"
            />
          </form>
          <h1 className="mr-5">O</h1>
        </div>
      </div>
    </>
  );
};

export default NavBar;
