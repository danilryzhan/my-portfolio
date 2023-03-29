import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import heroImage from "../assets/60eb55e30b45388e2c35ef0a3f53dae1.jpg";

import { Link } from "react-scroll";

export default function NavBar() {
  return (
    <div className='bg-home-background bg-fixed bg-no-repeat bg-cover	'>
    <div
      className="h-screen  backdrop-blur-md backdrop-sepia " 
    >
      <div
        className="   max-w-screen-lg mx-auto flex flex-col items-center
      justify-center h-full px-4 backdrop:filter backdrop-invert bg-white/30 "
      >
        <a
          href="#"
          class="shadow-lg flex flex-col text-right text-[#658262]  bg-[#fff]   items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-screen-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="  object-cover w-full rounded-t-lg  md:h-auto md:w-80 md:rounded-none md:rounded-l-lg"
            src={heroImage}
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-6xl font-bold tracking-tight  text-gray-900 dark:text-white">
              Ryzhan Danylo
            </h5>
            <p class="mb-3 text-4xl tex  text-gray-700 dark:text-gray-400">
              I have 1 year of experince building and designing front end
              websites from scratch. Currently I love to work on web
              applications using technologies like React, Tailwind❤️
            </p>
            <div>
              <button class="bg-transparent text-center max-w-sm hover:bg-blue-500 text-blue-700 font-semibold hover:text-silver py-2 px-4 border first-letter: border-day hover:border-transparent rounded">
                Button
              </button>
            </div>
          </div>
        </a>
        
      </div>
      

    </div>
    </div>
  );
}
