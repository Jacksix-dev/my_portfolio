import React from "react";
import { IoMdTimer } from "react-icons/io";
import { GoDiscussionClosed } from "react-icons/go";
import problemSolving from './solution.png'

function SubContent() {
  return (
    <div className=' mx-10 mt-10 flex justify-around'>
       

       

       <div style={{ backgroundColor: '#014D86' }} className=" relative overflow-visible rounded-tl-3xl rounded-lg w-96 h-80">
        <div style={{ backgroundColor: '#2196F3' }} className="absolute -left-4 -top-4 w-24 h-24 flex justify-center rounded-full">
        <IoMdTimer className=" w-16 h-16 self-center " color="white"/>

        </div>
        <h2 className="text-white font-bold	 text-3xl bold mt-24 mx-2 ">Exelent Time Management</h2>
        <p className="text-white  text-xl mt-4 mx-2 ">I prioritize tasks effectively, ensuring that projects are completed on time and within budget. My efficient use of time allows me to meet deadlines without compromising on quality.</p>
       </div>

       <div style={{ backgroundColor: '#014D86' }} className=" relative overflow-visible rounded-tl-3xl rounded-lg w-96 h-80">
        <div style={{ backgroundColor: '#2196F3' }} className="absolute -left-4 -top-4 w-24 h-24 flex justify-center rounded-full">
        <img src={problemSolving}  className=" w-16 h-16 self-center " color="white"/>

        </div>
        <p className="text-white mt-32 ml-2 ">Exelent time management</p>
       </div>

       <div style={{ backgroundColor: '#014D86' }} className=" relative overflow-visible rounded-tl-3xl rounded-lg w-96 h-80">
        <div style={{ backgroundColor: '#2196F3' }} className="absolute -left-4 -top-4 w-24 h-24 flex justify-center rounded-full">
        <GoDiscussionClosed className=" w-16 h-16 self-center " color="white"/>

        </div>
        <h2 className="text-white font-bold	 text-3xl bold mt-24 mx-2 ">Clear and concise communicator</h2>

        <p className="text-white text-xl mt-4 mx-3 ">I thrive in team environments, effectively communicating with developers, designers, and stakeholders to achieve a common goal. My strong teamwork skills enable me to contribute meaningfully to project success and foster a collaborative work culture.</p>
       </div>

       
       
    </div>
     
    
  );
}

export { SubContent };
