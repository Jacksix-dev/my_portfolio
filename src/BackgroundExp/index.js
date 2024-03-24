import React from "react";
import harulogo from './harulogo.png'
import lewagon from './lewagon.png'
import platzi from './platzi.jpg'
import { HiOutlineBriefcase } from "react-icons/hi";
import { PiGraduationCap } from "react-icons/pi";
import {motion} from 'framer-motion'

function BackgroundExp() {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    className=" mt-16">

      <div style={{ backgroundColor: '#012A4A' }} className=" m-auto w-1/4 rounded-lg h2">
       <p className="p-2 text-center font-bold text-3xl text-white ">My background</p>
      </div>

      <div className=" grid lg:grid-cols-2 grid-cols-1  mt-5  gap-x-10">

          
           <div style={{ backgroundColor: '#012A4A' }}  className="justify-self-end rounded-lg w-60 text-center h-10 text-white">
            <p className="p-2 text-center  text-xl text-white">Work Experience</p>
           </div>
          
           <div style={{ backgroundColor: '#012A4A' }}  className="justify-self-start rounded-lg w-60 text-center h-10 text-white">
            <p className="p-2 text-center  text-xl text-white">Education</p>
           </div>
        
        

           <div style={{ backgroundColor: '#011220' }} className="w-3/6 h-8 flex justify-center place-self-end">
              <span class=" z-10 relative mt-6 flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-400"></span>
              </span>
            </div>

        <div style={{ backgroundColor: '#011220' }} className="w-3/6 h-8 flex justify-center ">
          
        </div>



          <div style={{ backgroundColor: '#012A4A' }}  className=" shadow-lg ring-1 relative border-sky-400 border-2  justify-self-end grid grid-cols-3 rounded-lg w-3/6 h-6/6 text-white">

          

              <div className=" flex basis-1/4 ">

              <HiOutlineBriefcase className='m-auto text-6xl'/>

               
              </div>
              <div className="static col-span-2">
              
                <h3 className="text-lg mt-2">Freelancer (2024)</h3>
                
                <ul className="my-5">
                    <li className="text-md mb-2" >- Implemented and deployed to production several upgrades inside the help center using Mustage.js and the Curlybars framework.</li>
                    <li className="text-md" >- Administrated Zendesk customer support system, solved +4000 customer tickets.</li>
                  </ul>
              </div>
              
              

           </div>

        <div style={{ backgroundColor: '#012A4A' }} className="shadow-lg border-sky-400 border-2 grid grid-cols-3 rounded-lg w-3/6 h-6/6 text-white">
          <div className=" flex basis-1/4 ">
                <img alt='img' className=' m-auto h-13 w-14' src={lewagon}/>
              </div>
              <div className=" col-span-2  ">
                <h3 className="text-lg mt-2">Full Stack Developer Bootcamp</h3>
                <p className=""> -Lewagon LLC</p>
                <ul className="my-5">
                    <li className="text-md mb-2" >- 9-week full-time intensive coding bootcamp.</li>
                    <li className="text-md" >- Designed, implemented, and deployed to production a web application called Comander.</li>
                  </ul>
              </div>
        </div>

        <div style={{ backgroundColor: '#011220' }} className="w-3/6 h-8 flex justify-center place-self-end">
          <div className="w-1 h-8  bg-sky-300"></div>
        </div>

        <div style={{ backgroundColor: '#011220' }} className="w-3/6 h-8 flex justify-center ">
          <div className="w-1 h-8  bg-sky-300"></div>
        </div>
        

        <div style={{ backgroundColor: '#012A4A' }}  className=" border-sky-300 border-2 justify-self-end grid grid-cols-3 rounded-lg w-3/6 h-6/6 text-white">
              <div className=" flex basis-1/4 ">
                <img alt='img' className=' m-auto h-13 w-12' src={harulogo}/>
              </div>
              <div className=" col-span-2  ">
                <h3 className="text-lg mt-2">Customer Tech Engineer (2020/2021)</h3>
                <p className=""> -Haru Invest LLC</p>
                <ul className="my-5">
                    <li className="text-md mb-2" >- Implemented and deployed to production several upgrades inside the company's help center using Mustage.js and the Curlybars framework.</li>
                    <li className="text-md" >- Administrated Zendesk customer support system, solved +4000 customer tickets.</li>
                  </ul>
              </div>
                        
      
      </div>

      

      <div style={{ backgroundColor: '#012A4A' }}  className="border-sky-300 border-2 grid grid-cols-3 rounded-lg w-3/6 h-6/6 text-white">
              
     
              <div className=" flex basis-1/4 ">

              
                <img alt='img' className=' rounded m-auto h-13 w-14' src={platzi}/>
              </div>
              <div className=" col-span-2  ">
                <h3 className="text-lg mt-2">Frontend Developer with Javascript (2020/2021)</h3>
                <p className=""> -Platzi LLC</p>
                <ul className="my-5">
                <li className="text-md" >Completed a carrer path that involved the completation of multiple courses related to frontend development. </li>

                <li className="text-md mt-1" >-API REST with Javascript </li>
                    <li className="text-md" >-Typescript Fundamentals</li>
                        <li className="text-md" >-Ethereum for developers</li>
                  </ul>
              </div>
              
        </div>

        <div style={{ backgroundColor: '#011220' }} className="w-3/6 h-8 flex justify-center place-self-end">
          <div className="w-1 h-8  bg-sky-200"></div>
        </div>

        <div style={{ backgroundColor: '#011220' }} className="w-3/6 h-8 flex justify-center ">
          <div className="w-1 h-8  bg-sky-200"></div>
        </div>

        
        <div style={{ backgroundColor: '#012A4A' }}  className="border-sky-200 border-2 justify-self-end grid grid-cols-3 rounded-lg w-3/6 h-6/6 text-white">
              
     
              <div className=" flex basis-1/4 ">

              
                <img alt='img' className=' rounded m-auto h-13 w-12' src={harulogo}/>
              </div>
              <div className=" col-span-2  ">
                <h3 className="text-lg mt-2">Community Manager (2020/2021)</h3>
                <p className=""> - Blockcrafters - HaruInvest LLC</p>
                <ul className="my-5">
                    <li className="text-md mb-2" >- Designed and implemented social media campaigns</li>
                    <li className="text-md" >- Generated a strong bond between the company and its community </li>
                  </ul>
              </div>
              
        </div>

        <div style={{ backgroundColor: '#012A4A' }}  className="border-sky-200 border-2 grid grid-cols-3 rounded-lg w-3/6 h-6/6 text-white">
              
     
              <div className=" flex basis-1/4 ">

              
              <PiGraduationCap className='m-auto text-6xl' />

              </div>

              <div className=" col-span-2 ">
                <h3 className="text-lg mt-2">Don Orione High-School </h3>
                <p className=""></p>
                <ul className="my-5">

                    <li className="text-md mb-2"> -Finished with a specialization in Computer Management</li>
                    <li className="text-md">-Created a fashion company 'Zibali' that met and exeded the sell goals </li>
                  
                  </ul>
              </div>
              
        </div>

      
        
      </div>
    </motion.div>
  );
}

export { BackgroundExp };