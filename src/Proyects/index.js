import React from "react";
import { DiRubyRough } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import comander from "./comander.png"
import { IoMdCode } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

function Proyects({hoverEnter, hoverExit}) {
  return (
    <>
    
    <div style={{ backgroundColor: '#012A4A' }} className=" mt-10 m-auto w-1/4 rounded-lg h2">
       <p className="p-2 text-center text-3xl text-white">Proyects</p>
      </div>

    <article className="mt-5 grid grid-cols-2 justify-center text-white gap-5">
        <div className="justify-self-end bg-sky-500 rounded-2xl ">
            <img className=" object-cover w-80 h-60 rounded-2xl" src={comander}/>
        </div>
        <div>
            <h1 className="bold text-2xl	">Comander - The best way to handle your restaurant</h1>
            <div className="flex">
                <div className="ml-2 w-12 flex bg-red-700 rounded-lg border-2 border-red-700">
                <DiRubyRough className='my-auto ' color="white"/> <p className="">Ruby</p>
                </div>

                <div className="ml-2 w-22 flex bg-red-600 rounded-lg border-2 border-red-600">
                <SiRubyonrails className='my-auto mx-1' color="white"/> <p className="mr-1">Ruby on rails</p>
                </div>


            </div>
            
             <p className="mt-5 w-3/4 text-xl">An application that manages tables and orders within a restaurant, maximizing time and simplifying order management.</p>
            <div>
            <div className="flex ">
              <button onMouseEnter={hoverEnter} onMouseLeave={hoverExit} class="relative inline-flex items-center justify-center p-0.5  mt-5 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Code
                </span>
                </button>
                <button onMouseEnter={hoverEnter} onMouseLeave={hoverExit} class="relative inline-flex items-center justify-center p-0.5  mt-5 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Github
                </span>
                </button>

              </div>
           
            </div>
        </div>
    </article>
    </>
  );
}

export { Proyects };