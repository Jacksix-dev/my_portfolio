import React from "react";
import { DiRubyRough } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import comander from "./comander.png"

import { CiLocationArrow1 } from "react-icons/ci";


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
            <div className="flex align-baseline mt-0 lg:mt-10 ">
                <button onMouseEnter={hoverEnter} onMouseLeave={hoverExit} type="button" class="cursor-none text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-2 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 my-2">
                    <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                    </svg>
                        View on Github
                </button>

                <button onMouseEnter={hoverEnter} onMouseLeave={hoverExit} type="button" className=" text-lg button flex items-center rounded-lg mt-2 h-11 w-30 px-5 py-2.5 ">
                
                
                <p className="basis-4/4 ">Watch it live</p>
                <CiLocationArrow1 className="ml-2" />
                </button>


             </div>
           
            </div>
        </div>
    </article>
    </>
  );
}

export { Proyects };