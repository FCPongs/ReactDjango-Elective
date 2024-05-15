import React from "react";
import NavBar from "../Components/NavBar";
import AnimatedPage from "./AnimatedPage";



const ContactUs = () => {
  return (
    <>
    <div className='scrollbar-thin h-screen overflow-y-scroll overflow-x-hidden scrollbar-thumb-sky-500 scrollbar-track-white'>
    <NavBar />
      <AnimatedPage>
          <div className="p-8">
            <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border rounded-md p-2"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border rounded-md p-2"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border rounded-md p-2"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full border rounded-md p-2"
                  placeholder="Enter your message"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
      </AnimatedPage>
    </div>
    </>  
  );
};

export default ContactUs;