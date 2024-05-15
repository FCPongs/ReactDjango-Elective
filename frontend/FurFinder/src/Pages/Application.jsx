import React from "react";
import NavBar from "../Components/NavBar";
import ApplicationForm from "../Components/ApplicationForm";
import AnimatedPage from "./AnimatedPage";

const Application = () => {
  return (
    <>
    <div className="scrollbar-thin h-screen overflow-y-scroll overflow-x-hidden scrollbar-thumb-sky-500 scrollbar-track-white">
      <NavBar />
      <AnimatedPage>
        <ApplicationForm />
      </AnimatedPage>
      </div>
    </>
  );
};

export default Application;
