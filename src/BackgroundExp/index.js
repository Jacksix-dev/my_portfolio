import React from "react";


function BackgroundExp() {
  return (
    <div className=" mt-10">

      <div style={{ backgroundColor: '#012A4A' }} className=" m-auto w-1/4 rounded-lg h2">
       <p className="text-center text-xl text-white">My background</p>
      </div>

      <div className="grid grid-cols-2 justify-items-center mt-5 gap-10">

          
      <div style={{ backgroundColor: '#012A4A' }}  className="rounded-lg w-60 h-32 text-white">
              Work Experience
           </div>

        <div style={{ backgroundColor: '#012A4A' }} className="text-white rounded-lg w-60 h-32">
          Education
        </div>

          <div style={{ backgroundColor: '#012A4A' }}  className="flex rounded-lg w-60 h-32 text-white">
              <div className="basis-1/4 ">XD</div>
              <div className="basis-1/2  justify-center">
                <h3>Customer Support</h3>
                <p>Haru Invest</p>
              </div>
           </div>

        <div style={{ backgroundColor: '#012A4A' }} className="rounded-lg w-60 h-32">
            
        </div>

        
      </div>
    </div>
  );
}

export { BackgroundExp };