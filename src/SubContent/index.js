import React from "react";
import { IoMdTimer } from "react-icons/io";


function SubContent() {
  return (
    <div className='container mt-10 flex justify-around'>
       

      
       <div style={{ backgroundColor: '#014D86' }} className=" relative overflow-visible rounded-tl-3xl rounded-lg w-40 h-28">
        <div style={{ backgroundColor: '#2196F3' }} className="absolute -left-4 -top-4 w-14 h-14 flex justify-center rounded-full">
        <IoMdTimer className=" w-8 h-8 self-center " color="white"/>

        </div>
        <p className="text-white mt-10 ml-2 ">Exelent time management</p>
       </div>

       <div style={{ backgroundColor: '#014D86' }} className=" relative overflow-visible rounded-tl-3xl rounded-lg w-40 h-28">
        <div style={{ backgroundColor: '#2196F3' }} className="absolute -left-4 -top-4 w-14 h-14 flex justify-center rounded-full">
        <IoMdTimer className=" w-8 h-8 self-center " color="white"/>

        </div>
        <p className="text-white mt-10 ml-2 ">Exelent time management</p>
       </div>

       <div style={{ backgroundColor: '#014D86' }} className=" relative overflow-visible rounded-tl-3xl rounded-lg w-40 h-28">
        <div style={{ backgroundColor: '#2196F3' }} className="absolute -left-4 -top-4 w-14 h-14 flex justify-center rounded-full">
        <IoMdTimer className=" w-8 h-8 self-center " color="white"/>

        </div>
        <p className="text-white mt-10 ml-2 ">Exelent time management</p>
       </div>

       
    </div>
     
    
  );
}

export { SubContent };
