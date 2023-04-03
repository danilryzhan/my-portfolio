import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-fixed bg-no-repeat bg-cover bg-experience-background">
    <div
      name="Contact"
     
      className="backdrop-blur-md w-full h-screen"
    >
      <div data-aos="fade-up"
        className="flex flex-col p-4 justify-center
       max-w-screen-lg h-full mx-auto"
      >
        <div className="text-[#46424b] bg-form-bg p-5  rounded-md shadow-md  " >
        <div  className="text-center pb-8">
          <p
            className="text-[#60438b] text-4xl md:text-9xl font-bold 
           pb-2 inline"
          >
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me!</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/46fc97c1-bcfe-4c0c-8e85-93fd72a8e23b"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              required={true}
              placeholder="Enter your name"
              name="name"
              className="p-2 bg-transparent border-2 rounded-md
               text-white focus:outline-none"
            />

            <input
              type="email"
              required={true}
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <textarea
              name="message"
              required={true}
              cols="30"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              className=" border-2 px-6 py-3 mx-auto my-8 flex 
             items-center rounded-md hover:scale-105 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
