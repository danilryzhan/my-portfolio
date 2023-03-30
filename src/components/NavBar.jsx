import React from "react";
import {
  FaBars,
  FaGlasses,
  FaHome,
  FaNewspaper,
  FaTimes,
} from "react-icons/fa";

import { BsListCheck } from "react-icons/bs";
import { Link } from "react-scroll";
import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = React.useState(false);
  const [width, setWidth] = useState (window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 1022;

  const links = [
    {
      id: 1,
      child: (
        <>
          <FaHome size={30} />
          Home
        </>
      ),
      href: "https://www.linkedin.com/in/amol-shelke-627813220/",
      style: "rounded-tr-md",
      link: "Home",
    },

    {
      id: 2,
      child: (
        <>
          <FaNewspaper size={30} /> Github
        </>
      ),

      link: "About",
    },

    {
      id: 3,
      child: (
        <>
          <BsListCheck size={30} /> Portfolio
        </>
      ),

      link: "Portfolio",
    },

    {
      id: 4,
      child: (
        <>
          <FaGlasses size={30} /> Skills
        </>
      ),
      href: "mailto:shelkeamol829@gmail.com",
      link: "Skills",
    },

    {
      id: 5,
      child: (
        <>
          <BsListCheck size={30} /> Resume
        </>
      ),
      href: "/AmolShelke.resume.pdf",
      style: "rounded-br-md",
      link: "Home",
      download: true,
    },
  ];

  if(isMobile)return(<div
    className="flex top-0 justify-between items-center w-full h-20 px-5 z-10
   text-white  fixed"
  >
    <div
      className=" cursor-pointer pr-4 z-10 text-gray-500 "
      onClick={() => setNav(!nav)}
    >
      {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
    </div>

    {nav && (
      <ul
        className="flex flex-col justify-center items-center 
      absolute top-0 left-0 w-full h-screen bg-gradient-to-b
       bg-primary bg-opacity-90"
      >
        {links.map(({ id, link }) => (
          <li
            className=" px-4 cursor-pointer capitalize py-6
          text-4xl"
            key={id}
          >
            <Link
              onClick={() => setNav(!nav)}
              to={link}
              smooth
              duration={500}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </div>)

  return (
   
        <div className="flex-col top-[35%] right-0 fixed hidden lg:flex">
          <ul>
            {links.map(({ id, child, link, style, download }) => (
              <li
                key={id}
                className={
                  "flex justify-between items-center w-40 h-14 px-4 mr-[-100px] hover:rounded-md hover:ml-[-90px] duration-300 bg-[#fcdc6c]" +
                  " " +
                  style
                }
              >
                <Link
                  className=" cursor-pointer flex justify-between items-center 
            w-full text-white"
                  to={link}
                  smooth
                  duration={500}
                >
                  {child}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      
     
  );
};

export default NavBar;
