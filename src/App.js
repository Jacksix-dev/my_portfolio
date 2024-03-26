import {useState, useEffect } from 'react';
import React from "react";
import {HeaderNav} from './HeaderNav'
import { MainContent } from "./MainContent";
import { CardFlip, SubContent } from "./SubContent";
import { BackgroundExp } from "./BackgroundExp";
import {Proyects} from './Proyects'
import { TechStack } from "./TechStack";
import {motion} from 'framer-motion'
import { Footter } from './Footter';
import { MouseAnimation } from './MouseAnimation';
import './App.css';




function App() {


const {smallCursorVariants, smallVariants, variants, cursorVariant, hoverEnter, hoverExit } = MouseAnimation();

  return (
    <>
    
    <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Text:wght@100..900&display=swap" rel="stylesheet"/>


    <motion.div
    transition={{ duration: 0.1 }}
     variants={smallVariants}
     animate={cursorVariant}
     className="z-10 md:opacity-100 opacity-0 bg-sky-500 rounded-full fixed pointer-events-none	w-3 h-3"/>



   <motion.div
    transition={{ duration: 0.15 }}
     variants={variants}
     animate={cursorVariant}
     className="z-10 md:opacity-100 opacity-0 border-2 border-sky-500 rounded-full fixed pointer-events-none	w-10 h-10"/>
    
     <header className="App-header">
    
      <HeaderNav
      hoverEnter={hoverEnter} hoverExit={hoverExit}>

      </HeaderNav>
      </header>
      <body className='App-background'>
      <MainContent
        hoverEnter={hoverEnter} hoverExit={hoverExit}
      />
      <div className='flex flex-col lg:flex-row items-center lg:justify-center'>
      <SubContent/>
      
      </div>
      

      <BackgroundExp/>

      <Proyects
      hoverEnter={hoverEnter} hoverExit={hoverExit}/>

      <TechStack/>
      <Footter
        hoverEnter={hoverEnter} hoverExit={hoverExit}/>
      <div>
      
      </div>
      
      </body>
    </>
     
    
  );
}

export default App;



