import React from "react";
import { DiRubyRough } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import comander from "./comander.png"

function Proyects() {
  return (
    <>
    
    <div style={{ backgroundColor: '#012A4A' }} className=" mt-10 m-auto w-1/4 rounded-lg h2">
       <p className="text-center text-xl text-white">Proyects</p>
      </div>

    <article className="mt-5 grid grid-cols-2 justify-center text-white gap-5">
        <div className="justify-self-end bg-sky-500 rounded-2xl ">
            <img className=" object-cover w-80 h-60 rounded-2xl" src={comander}/>
        </div>
        <div>
            <h1 className="bold text-2xl	">Comander - The best way to handle your restaurant</h1>
            <div className="flex">
                <div className="ml-2 w-12 flex bg-red-700 rounded-lg border-2 border-red-700">
                <DiRubyRough className='my-auto ' color="white"/> <p className="">Ruby</p>
                </div>

                <div className="ml-2 w-22 flex bg-red-600 rounded-lg border-2 border-red-600">
                <SiRubyonrails className='my-auto mx-1' color="white"/> <p className="mr-1">Ruby on rails</p>
                </div>


            </div>
            
             <p>Restaurantes bien piolas</p>
            <div>
                <button></button>
            </div>
        </div>
    </article>
    </>
  );
}

export { Proyects };