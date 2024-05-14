import React from "react";
import NavBar from "../Components/NavBar";
import ApplicationForm from "../Components/ApplicationForm";
import AnimatedPage from "./AnimatedPage";

const Application = () => {
  return (
    <>
      <NavBar />
      <AnimatedPage>
        <ApplicationForm />
      </AnimatedPage>
    </>
  );
};

export default Application;
