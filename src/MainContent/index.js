import React from "react";
import portraitImage from './IMG_20240131_092157790_MF_PORTRAIT.jpg';
import { GoDiscussionClosed } from "react-icons/go";

import {motion} from 'framer-motion'

import './index.css'
function MainContent(props) {
  return (
    <div className='grid grid-cols-2'>
        <div className="flex flex-col justify-items-center">
        <p className="text-center text-white text-8xl">Facundo Gasco</p>
        <p className="text-4xl mt-4 text-center text-white">Full Stack Developer</p>
        <p className="text-center text-lg px-10 mt-3 text-white"> Soy el mejor desarrollador desaroolando en las tecnologias mas intereanstes en este mundo tan copadosaaaaa</p>
        <button onMouseEnter={props.hoverEnter} onMouseLeave={props.hoverExit} type="button" className=" mt-5 mx-auto button w-1/5 mb-2">Contactame</button>
        </div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="rounded-full grid place-self-center w-70 h-80 "
      >
        <img  onMouseEnter={props.hoverEnter} onMouseLeave={props.hoverExit} className="rounded-full object-cover w-80 h-80 border-4 border-cyan-400  place-self-center" src={portraitImage}  />
      
      </motion.div>

        
    </div>
     
    
  );
}

export { MainContent };

