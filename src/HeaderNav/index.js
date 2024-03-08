import { FaCode } from "react-icons/fa";

import React from "react";


function HeaderNav() {
  return (
    <>
    <FaCode className="flex-none" />
    <div className='flex flex-row justify-center'>
      
        <p className="text-white hover:text-gray-600 text-lg mx-10">Home</p>
        <p className="text-white hover:text-gray-600 text-lg mx-10" >Proyects</p>
        <p className="text-white  hover:text-gray-600 text-lg mx-10">About me</p>
    </div>
    </>
    
  );
}

export { HeaderNav };

