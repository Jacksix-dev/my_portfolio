import { FaCode } from "react-icons/fa";
import {motion} from 'framer-motion'
import React from "react";
import { TbCodeCircle } from "react-icons/tb";


function HeaderNav({hoverEnter, hoverExit}) {
  return (
    <>
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    className='flex flex-row justify-center'>
    
    <a href="#aboutme" onMouseEnter={hoverEnter} onMouseLeave={hoverExit}  className="hover:transition-all mt-3 tracking-wide text-white hover:border-b-2 hover:border-sky-600 text-xl mx-10">About me</a>
        <a href="#proyects" onMouseEnter={hoverEnter} onMouseLeave={hoverExit}  className="hover:transition-all tracking-wide mt-3 text-white hover:border-b-2 hover:border-sky-600  text-xl mx-10" >Proyects</a>  
   <a href="#contacts" onMouseEnter={hoverEnter} onMouseLeave={hoverExit} className="hover:transition-all tracking-wide transition-all border-b-0 mt-3 text-white hover:border-b-2 hover:border-sky-600 text-xl mx-10">Tech Stack</a>

    </motion.div>
    </>
    
  );
}

export { HeaderNav };

