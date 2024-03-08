import {useState, useEffect } from 'react';
import React from "react";
import {HeaderNav} from './HeaderNav'
import { MainContent } from "./MainContent";
import { SubContent } from "./SubContent";
import { BackgroundExp } from "./BackgroundExp";
import {Proyects} from './Proyects'
import { TechStack } from "./TechStack";
import {motion} from 'framer-motion'

import './App.css';



function App() {
const [mousePosition, setMousePosition] = useState({
  x:0,
  y: 0
})

const [cursorVariant, setCursorVariant] =useState('default')

const mouseMove = e =>{
  
  setMousePosition({
    x: e.clientX,
    y: e.clientY
  })

}
useEffect(()=>{
  window.addEventListener('mousemove', mouseMove)
  return ()=>{
    window.removeEventListener('mousemove',mouseMove)
  }

},[])

const variants ={
  default: {
    x:mousePosition.x - 20,
    y:mousePosition.y - 20
  },
  hover:{
    x:mousePosition.x - 40,
    y:mousePosition.y - 40,
    height: 100,
    width:100,
    backgroundColor: 'rgba(135, 206, 235, 0.5)'
    
  }

}

const hoverEnter = () =>{setCursorVariant('hover')}

const hoverExit = () =>{ setCursorVariant('default')}


  return (
    <>
    
    <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Text:wght@100..900&display=swap" rel="stylesheet"/>


   <motion.div
     variants={variants}
     animate={cursorVariant}
     className="z-10 bg-sky-400 rounded-full fixed pointer-events-none	w-10 h-10"/>
    
     <header className="App-header">
    
      <HeaderNav></HeaderNav>
      </header>
      <body className='App-background'>
      <MainContent/>
      <h1  onMouseEnter={hoverEnter} onMouseLeave={hoverExit} className='text-white bold'>ENLARGE</h1>
      <SubContent/>

      <BackgroundExp/>

      <Proyects/>

      <TechStack/>
      </body>
    </>
     
    
  );
}

export default App;



