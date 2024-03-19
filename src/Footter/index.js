import React from "react";
import './index.css'

import { FaGithub } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { MdMailOutline } from "react-icons/md";

function Footter() {
  return (
    <>
        <div  className="p-5 text-white flex justify-center footter">
           
            <div className="flex rounded-full mx-3 w-10 h-10 border-sky-500 border-2">
            <FaGithub className="m-auto h-5 w-5" />

            </div>

            <div className="flex rounded-full mx-3 w-10 h-10 border-sky-500 border-2">
            <GrLinkedinOption  className="m-auto h-5 w-5" />

            </div>

            <div className="flex rounded-full mx-3 w-10 h-10 border-sky-500 border-2">
            <MdMailOutline className="m-auto h-5 w-5" />

            </div>

            

            <p className=" mt-5 left-3 absolute text-sky-900">Created with love by Facundo</p>

        </div>
        
    </>
  );
}

export { Footter };