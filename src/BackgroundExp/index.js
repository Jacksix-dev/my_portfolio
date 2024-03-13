import React from "react";
import harulogo from './harulogo.png'
import lewagon from './lewagon.png'
import platzi from './platzi.jpg'
import { HiOutlineBriefcase } from "react-icons/hi";
import { PiGraduationCap } from "react-icons/pi";

function BackgroundExp() {
  return (
    <div className=" mt-10">

      <div style={{ backgroundColor: '#012A4A' }} className=" m-auto w-1/4 rounded-lg h2">
       <p className="text-center text-xl text-white">My background</p>
      </div>

      <div className="grid grid-cols-2  mt-5 gap-y-10 gap-x-10">

          
      <div style={{ backgroundColor: '#012A4A' }}  className="justify-self-end rounded-lg w-60 text-center h-10 text-white">
              Work Experience
           </div>
           <div style={{ backgroundColor: '#012A4A' }}  className=" rounded-lg w-60 text-center h-10 text-white">
              Education
           </div>
        
        


          <div style={{ backgroundColor: '#012A4A' }}  className=" border-sky-700 border-2 border-double relative justify-self-end grid grid-cols-3 rounded-lg w-3/6 h-6/6 text-white">

          <span class="absolute flex left-80 h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
               </span>

              <div className=" flex basis-1/4 ">

              <HiOutlineBriefcase className='m-auto text-6xl'/>

               
              </div>
              <div className=" col-span-2  ">
                <h3 className="mt-2">Freelancer (2024)</h3>
                
                <ul className="my-5">
                    <li className="text-sm mb-2" >- Implemented and deployed to production several upgrades inside the help center using Mustage.js and the Curlybars framework.</li>
                    <li className="text-sm" >- Administrated Zendesk customer support system, solved +4000 customer tickets.</li>
                  </ul>
              </div>
              
              

           </div>

        <div style={{ backgroundColor: '#012A4A' }} className="grid grid-cols-3 rounded-lg w-3/6 h-6/6 text-white">
          <div className=" flex basis-1/4 ">
                <img alt='img' className=' m-auto h-13 w-12' src={lewagon}/>
              </div>
              <div className=" col-span-2  ">
                <h3 className="mt-2">Full Stack Developer Bootcamp</h3>
                <p className=""> -Lewagon LLC</p>
                <ul className="my-5">
                    <li className="text-sm mb-2" >- 9-week full-time intensive coding bootcamp.</li>
                    <li className="text-sm" >- Designed, implemented, and deployed to production a web application called Comander.</li>
                  </ul>
              </div>
        </div>

        <div style={{ backgroundColor: '#012A4A' }}  className="justify-self-end grid grid-cols-3 rounded-lg w-3/6 h-6/6 text-white">
              <div className=" flex basis-1/4 ">
                <img alt='img' className=' m-auto h-13 w-12' src={harulogo}/>
              </div>
              <div className=" col-span-2  ">
                <h3 className="mt-2">Customer Tech Engineer (2020/2021)</h3>
                <p className=""> -Haru Invest LLC</p>
                <ul className="my-5">
                    <li className="text-sm mb-2" >- Implemented and deployed to production several upgrades inside the help center using Mustage.js and the Curlybars framework.</li>
                    <li className="text-sm" >- Administrated Zendesk customer support system, solved +4000 customer tickets.</li>
                  </ul>
              </div>
                        
      
      </div>

      <div style={{ backgroundColor: '#012A4A' }}  className=" grid grid-cols-3 rounded-lg w-3/6 h-6/6 text-white">
              
     
              <div className=" flex basis-1/4 ">

              
                <img alt='img' className=' rounded m-auto h-13 w-12' src={platzi}/>
              </div>
              <div className=" col-span-2  ">
                <h3 className="mt-2">Frontend Developer with Javascript (2020/2021)</h3>
                <p className=""> -Platzi LLC</p>
                <ul className="my-5">
                    <li className="text-sm mb-2" >- Designed and implemented social media campaigns</li>
                    <li className="text-sm" >- Generated a strong bond between the company and its community </li>
                  </ul>
              </div>
              
        </div>


        
        <div style={{ backgroundColor: '#012A4A' }}  className="justify-self-end grid grid-cols-3 rounded-lg w-3/6 h-6/6 text-white">
              
     
              <div className=" flex basis-1/4 ">

              
                <img alt='img' className=' rounded m-auto h-13 w-12' src={harulogo}/>
              </div>
              <div className=" col-span-2  ">
                <h3 className="mt-2">Frontend Developer with Javascript (2020/2021)</h3>
                <p className=""> - Blockcrafters - HaruInvest LLC</p>
                <ul className="my-5">
                    <li className="text-sm mb-2" >- Designed and implemented social media campaigns</li>
                    <li className="text-sm" >- Generated a strong bond between the company and its community </li>
                  </ul>
              </div>
              
        </div>

        <div style={{ backgroundColor: '#012A4A' }}  className=" grid grid-cols-3 rounded-lg w-3/6 h-6/6 text-white">
              
     
              <div className=" flex basis-1/4 ">

              
              <PiGraduationCap className='m-auto text-6xl' />

              </div>

              <div className=" col-span-2 ">
                <h3 className="mt-2">High-School Don Orione</h3>
                <p className=""></p>
                <ul className="my-5">

                    <li className="text-sm mb-2"> -Finished with a specialization in Computer Management & Marketing</li>
                    <li className="text-sm"> -Generated a strong bond between the company and its community </li>
                  
                  </ul>
              </div>
              
        </div>

      
        
      </div>
    </div>
  );
}

export { BackgroundExp };