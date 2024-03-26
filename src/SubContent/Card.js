import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ frontContent, backContent, icon }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleHover = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div 
    className="mt-10">
      <div
        id='aboutme'
        className="w-80 h-80 relative"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        style={{ perspective: "1000px" }} // Add perspective for 3D effect
      >
        <motion.div

        //front
          className={`absolute inset-0 w-full h-full border-2 border-sky-400 shadow-md rounded-lg flex flex-col items-center justify-center transform ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          style={{ backfaceVisibility: "hidden" }} // Hide back face of the card
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
            <div className="ring ring-sky-100 drop-shadow-xl w-24 mb-10 h-24 flex items-center justify-center rounded-full bg-sky-500 text-white">
                {icon}
            </div>
          <p className="text-2xl text-white">{frontContent}</p>
        </motion.div>

            
        <motion.div
        //back
          className={`absolute inset-0 w-full h-full bg-sky-600 shadow-md rounded-lg flex items-center justify-center transform ${
            isFlipped ? "" : "rotate-y-180"
          }`}
          style={{ backfaceVisibility: "hidden" }} // Hide back face of the card
          initial={{ rotateY: -180 }}
          animate={{ rotateY: isFlipped ? 0 : -180 }}
          transition={{ duration: 0.5 }}
        >
          <p className=" p-1 tracking-wide text-2xl text-center text-white">{backContent}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export { Card };