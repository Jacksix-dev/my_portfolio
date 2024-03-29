import { FaCode } from "react-icons/fa";
import {motion} from 'framer-motion'
import React from "react";


function HeaderNav({hoverEnter, hoverExit}) {
  return (
    <>
    <FaCode className=" ml-3 mt-3 flex-none absolute w-10 h-10" color="white" />
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    className='flex flex-row justify-center'>
    

        <p onMouseEnter={hoverEnter} onMouseLeave={hoverExit} className="hover:transition-all tracking-wide transition-all border-b-0 mt-3 text-white hover:border-b-2 hover:border-sky-600 text-xl mx-10">Home</p>
        <p onMouseEnter={hoverEnter} onMouseLeave={hoverExit}  className="hover:transition-all tracking-wide mt-3 text-white hover:border-b-2 hover:border-sky-600  text-xl mx-10" >Proyects</p>
        <p onMouseEnter={hoverEnter} onMouseLeave={hoverExit}  className="hover:transition-all mt-3 tracking-wide text-white hover:border-b-2 hover:border-sky-600 text-xl mx-10">About me</p>
    </motion.div>
    </>
    
  );
}

export { HeaderNav };

