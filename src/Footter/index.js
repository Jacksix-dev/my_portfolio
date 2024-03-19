import React from "react";
import './index.css'

import { FaGithub } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { MdMailOutline } from "react-icons/md";

function Footter({hoverEnter, hoverExit}) {
  return (
    <>
        <div  className="p-5 text-white flex justify-center footter">
           
            
            
            <a onMouseEnter={hoverEnter} onMouseLeave={hoverExit} className="hover:text-black hover:bg-sky-50 flex rounded-full mx-3 w-10 h-10 border-sky-500 border-2" href="https://github.com/Jacksix-dev">
                 <FaGithub  className="m-auto h-5 w-5" />
            </a> 
            

            <a onMouseEnter={hoverEnter} onMouseLeave={hoverExit} href="https://www.linkedin.com/in/facundo-gasco/" className=" hover:text-sky-800 hover:bg-sky-50 flex rounded-full mx-3 w-10 h-10 border-sky-500 border-2">
            <GrLinkedinOption  className="m-auto h-5 w-5" />

            </a>

            <a onMouseEnter={hoverEnter} onMouseLeave={hoverExit} href="mailto:facundogasco1209@gmail.com" className="hover:text-black hover:bg-sky-50 flex rounded-full mx-3 w-10 h-10 border-sky-500 border-2">
            <MdMailOutline className="m-auto h-5 w-5" />

            </a>

            

            <p className=" mt-5 left-3 absolute text-sky-900">Created with love by Facundo</p>

        </div>
        
    </>
  );
}

export { Footter };