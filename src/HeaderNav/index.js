import { FaCode } from "react-icons/fa";

import React from "react";


function HeaderNav() {
  return (
    <>
    <FaCode className=" ml-3 mt-3 flex-none absolute w-6 h-6" color="white" />
    <div className='flex flex-row justify-center'>
    

        <p className=" mt-3 text-white hover:text-gray-600 text-lg mx-10">Home</p>
        <p className="mt-3 text-white hover:text-gray-600 text-lg mx-10" >Proyects</p>
        <p className="mt-3 text-white  hover:text-gray-600 text-lg mx-10">About me</p>
    </div>
    </>
    
  );
}

export { HeaderNav };

