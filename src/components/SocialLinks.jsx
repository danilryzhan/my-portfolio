import React from "react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IconBase } from "react-icons";
import upwork from "../assets/upwork_icon.png";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/danil-ryzhan-3878a81a8/",
      style: "rounded-tr-md",
    },

    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/danilryzhan",
    },

    {
      id: 3,
      child: (
        <>
          Upwork
          <IconBase viewBox="0 0 24 24" size={30}>
                <g><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703a2.707 2.707 0 0 1-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366c-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.551 2.551 0 0 1-2.547 2.548a2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303c2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109c3 0 5.439-2.452 5.439-5.45c0-3-2.439-5.439-5.439-5.439z"/></g>
            </IconBase>
          
        </>
      ),
      href: "https://www.upwork.com/freelancers/danilryzhan",
    },

    {
      id: 4,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:ryzhandanil@gmail.com",
    },

    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/RyzhanDanylResume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="  flex-col top-[35%] left-0 fixed hidden lg:flex">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex bg-[#4464b4] justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md hover:ml-[10px] duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center 
            w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
