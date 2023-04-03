import React from "react";
import {
  FaBars,
  FaGlasses,
  FaHome,
  FaNewspaper,
  FaTimes,
} from "react-icons/fa";

import { BsChat, BsListCheck } from "react-icons/bs";
import { Link } from "react-scroll";
import { useState } from "react";


const NavBar = () => {
  const [nav, setNav] = React.useState(false);
  const [width, setWidth] = useState(window.innerWidth);


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

  React.useEffect(() => {
    if(nav && isMobile){
      document.body.style.overflow = 'hidden';
    }
    else{
      document.body.style.overflow = '';
    } 
    
  }, [nav,isMobile]);



  
    
  
  
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaHome size={30} />
          Home
        </>
      ),
      style: "rounded-tl-md",
      link: "Home",
    },

    {
      id: 2,
      child: (
        <>
          <FaNewspaper size={30} /> About
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
      link: "Skills",
    },

    {
      id: 5,
      child: (
        <>
          <BsChat  size={30} /> Contact
        </>
      ),
     
      style: "rounded-bl-md ",
      link: "Contact",
      download: true,
    },
  ];

   if (isMobile)
    return (
      <div
        className="  flex top-0 justify-between items-center w-full h-20 px-5 z-10
   text-white  fixed"
      >
        <div className=" z-10 bg-[#fcdc6c]  align-middle text-white font-bold py-2 px-4 rounded-full">
          <div
            className=" cursor-pointer  z-10 text-gray-500 "
            onClick={() => {setNav(!nav)}}
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
      </div>
          {nav &&(
            <ul className=" bg-primary  flex flex-col justify-center items-center 
      absolute top-0 left-0 w-full h-screen 
        bg-opacity-90">
              {links.map(({ id, link }) => (
                <li
                  className=" px-4 cursor-pointer capitalize py-6
          text-4xl"
                  key={id}
                >
                  <Link
                    onClick={() =>{ setNav(!nav);} }
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
          
        
      </div>
    );

  return (
    <div className="flex-col top-[35%] right-0 fixed hidden lg:flex r">
      <ul >
        {links.map(({ id, child, link, style }) => (
          <li
            key={id}
            className={
              "flex bg-[#fcdc6c] justify-between items-center w-40 h-14 px-4 mr-[-100px] hover:rounded-md hover:ml-[-110px] duration-300 " +
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
