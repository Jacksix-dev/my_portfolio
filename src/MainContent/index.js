import React from "react";
import portraitImage from './IMG_20240131_092157790_MF_PORTRAIT.jpg';
import { ReactTyped } from "react-typed";
import {motion} from 'framer-motion'

import './index.css'
function MainContent({hoverEnter, hoverExit}) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    className='grid grid-cols-2'>
        <div className="flex flex-col justify-items-center">
        <p className="text-center text-white text-8xl">Facundo </p>
        <p className="text-center text-sky-400 text-8xl">Gasco </p>
        <p className="text-4xl mt-4 text-center text-white">
        <ReactTyped
      strings={[
        "Fullstack Developer",
        "Frontend Developer",
        "Backend Developer",
      ]}
      typeSpeed={80}
      backSpeed={50}
      loop
    >
    </ReactTyped>
        </p>
        <p className=" tracking-wide text-center text-xl px-10 mt-3 text-white"> Full Stack, Full Fun: Creating Awesome Experiences for Everyone.</p>
        <button onMouseEnter={hoverEnter} onMouseLeave={hoverExit} type="button" className=" mt-5 mx-auto button w-1/5 mb-2">Contact me!</button>
        </div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="rounded-full grid place-self-center w-70 h-80 "
      >
        <img  alt='img' onMouseEnter={hoverEnter} onMouseLeave={hoverExit} className="rounded-full object-cover w-80 h-80 border-4 border-cyan-400  place-self-center" src={portraitImage}  />
      
      </motion.div>


    </motion.div>
     
    

     
  );
}

export { MainContent };

