import React from "react";
import { useState } from "react";
import { IoMdTimer } from "react-icons/io";
import { GoDiscussionClosed } from "react-icons/go";
import problemSolving from './solution.png'
import {motion} from 'framer-motion'

function SubContent() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleHover = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
    <motion.div>
      <div
        className=" w-80 lg:mx-14  h-80 relative"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        style={{ perspective: "1000px" }} 
      >
        <motion.div
          className={`absolute inset-0 w-full h-full bg-sky-800 shadow-md rounded-lg flex flex-col items-center justify-center transform ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          style={{ backfaceVisibility: "hidden" }} // Hide back face of the card
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-none bg-sky-400 rounded-full w-11 h-11">
            <IoMdTimer className="text-white"/>
          </div>
          <p className="text-2xl">Front</p>
        </motion.div>
        <motion.div
          className={`absolute inset-0 w-full h-full bg-sky-400 shadow-md rounded-lg flex items-center justify-center transform ${
            isFlipped ? "" : "rotate-y-180"
          }`}
          style={{ backfaceVisibility: "hidden" }} // Hide back face of the card
          initial={{ rotateY: -180 }}
          animate={{ rotateY: isFlipped ? 0 : -180 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl">back</p>
        </motion.div>
      </div>
    </motion.div>

    </>
    
  );
}

export { SubContent };