import React from "react";

import javascriptLogo from "./javaScript.png"
import htmlLogo from "./html.png"
import csslogo from './css-icon.png'
import rubylogo from './rubypng.png'
import { SiRubyonrails } from "react-icons/si";
import react from './react.png'
import tailwind from './tailwind.png'
import typescript from './Typescript.png'
import bootstrap from './bootstrap-logo.png'
import postgres from './PostgreSQL.png'
function TechStack() {
  return (
   <>
    <div style={{ backgroundColor: '#012A4A' }} className=" mt-10 m-auto w-1/4 rounded-lg ">
       <p className="py-2 text-center text-xl text-white">My Stack</p>
      </div>


    <div className="mt-5 flex justify-center">
      <div className="grid gap-y-5 gap-x-1 grid-cols-5 ">
        
          <div style={{ backgroundColor :'rgba(247,223,30,0.110084)'}} 
          className="shadow-[0px_0px_5px_5px_rgba(247,223,30,0.110084)]  flex mx-2 w-16 h-16 rounded-2xl  ">
         
         <img alt="img" className=" m-auto rounded-md w-8 h-8" src={javascriptLogo}/>
          
          </div>

          <div style={{ backgroundColor :'rgba(227,76,38,0.110084)'}} 
          className="shadow-[0px_0px_5px_5px_rgba(227,76,38,0.110084)]  flex mx-2 w-16 h-16 rounded-2xl  ">
         
         <img alt="img" className=" m-auto rounded-md w-8 h-8" src={htmlLogo}/>
          
          </div>

          <div style={{ backgroundColor :'rgba(32,98,175,0.110084)'}} 
          className="shadow-[0px_0px_5px_5px_rgba(32,98,175,0.110084)]  flex mx-2 w-16 h-16 rounded-2xl  ">
         
         <img alt="img" className=" m-auto rounded-md w-8 h-8" src={csslogo}/>
          
          </div>


          <div style={{ backgroundColor :'rgba(97,219,251,0.110084)'}} 
            className="shadow-[0px_0px_5px_5px_rgba(97,219,251,0.110084)]  flex mx-2 w-16 h-16 rounded-2xl  ">
         
            <img alt="img" className=" m-auto rounded-md w-9 h-9" src={react}/>
          
          </div>

          <div style={{ backgroundColor :'rgba(169,20,1,0.110084)'}} 
          className="shadow-[0px_0px_5px_5px_rgba(169,20,1,0.110084)]  flex mx-2 w-16 h-16 rounded-2xl  ">
         
          <img alt="img" className=" m-auto rounded-md w-9 h-9" src={rubylogo}/>
          
          </div>


          

          <div style={{ backgroundColor :'rgba(169,20,1,0.110084)'}} 
          className="shadow-[0px_0px_5px_5px_rgba(169,20,1,0.110084)]  flex mx-2 w-16 h-16 rounded-2xl  ">
         
            <SiRubyonrails color="red"  className=" m-auto rounded-md w-8 h-8" />
          
          </div>

          

          <div style={{ backgroundColor :'rgba(6,182,212,0.110084)'}} 
            className="shadow-[0px_0px_5px_5px_rgba(6,182,212,0.110084)]  flex mx-2 w-16 h-16 rounded-2xl  ">
         
            <img alt="img" className=" m-auto rounded-md w-9 h-6" src={tailwind}/>
          
          </div>

          <div style={{ backgroundColor :'rgba(49,120,198,0.110084)'}} 
            className="shadow-[0px_0px_5px_5px_rgba(49,120,198,0.110084)]  flex mx-2 w-16 h-16 rounded-2xl  ">
         
            <img alt="img" className=" m-auto rounded-md w-8 h-8" src={typescript}/>
          
          </div>


          <div style={{ backgroundColor :'rgba(121,19,246,0.110084)'}} 
            className="shadow-[0px_0px_5px_5px_rgba(121,19,246,0.110084)]  flex mx-2 w-16 h-16 rounded-2xl  ">
         
            <img alt="img" className=" m-auto rounded-md w-12 h-10" src={bootstrap}/>
          
          </div>


          <div style={{ backgroundColor :'rgba(207,216,223,0.110084)'}} 
            className="shadow-[0px_0px_5px_5px_rgba(207,216,223,0.110084)]  flex mx-2 w-16 h-16 rounded-2xl  ">
         
            <img alt="img" className=" m-auto rounded-md w-18 h-15" src={postgres}/>
          
          </div>


          


         
          

      </div>
    </div>
    
   </>
    
  );
}

export { TechStack };
