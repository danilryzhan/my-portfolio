import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      name="About"
      className="  shadow-4xl w-full md:h-screen 
      py-20 text-white text-center text-[#60438b] px-4 bg-[#fcecb2] "
    >
      <div
        className="max-w-screen-lg  mx-auto flex flex-col 
            justify-center w-full h-full"
        data-aos="fade-up"
      >
        <div className="pb-8">
          <p className="text-4xl md:text-9xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-[#46424b] text-xl md:text-4xl mt-20">
          Hello there! I'm a Full Stack Developer with a passion for creating
          high-quality web applications using the .NET framework. I specialize
          in both front-end and back-end development, which allows me to create
          full-fledged web solutions from scratch. <br></br><br></br>
          I'm a problem-solver at heart and love taking on new challenges. I'm
          committed to delivering high-quality code that is both maintainable
          and scalable. I'm a team player and enjoy collaborating with others to
          deliver the best possible product.
        </p>
        <br />
        <p className="text-[#46424b] text-xs md:text-xl">
          If you're looking for a Full Stack Developer who is passionate about
          building top-notch web solutions, then look no further. Please feel
          free to reach out to me with any questions or job opportunities by
          leaving a message below. Thank you for your time, and I look forward
          to hearing from you soon!
        </p>
      </div>
    </div>
  );
}
