import React from "react";
import NavBar from "../Components/NavBar";
import FindAPetContainer from "../Components/FindAPetContainer";
import AnimatedPage from "./AnimatedPage";

const FindAPet = () => {
  return (
    <>
    <div className="scrollbar-thin h-screen overflow-y-scroll overflow-x-hidden scrollbar-thumb-sky-500 scrollbar-track-white">
      <NavBar />
      <AnimatedPage>
        <FindAPetContainer />
      </AnimatedPage>
      </div>
    </>
  );
};

export default FindAPet;
