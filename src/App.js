import {useState, useEffect } from 'react';
import React from "react";
import {HeaderNav} from './HeaderNav'
import { MainContent } from "./MainContent";
import { SubContent } from "./SubContent";
import { BackgroundExp } from "./BackgroundExp";
import {Proyects} from './Proyects'
import { TechStack } from "./TechStack";
import {motion} from 'framer-motion'
import { MouseAnimation } from './MouseAnimation';
import './App.css';




function App() {


const { variants, cursorVariant, hoverEnter, hoverExit } = MouseAnimation();

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
      <MainContent
        onMouseEnter={hoverEnter} onMouseLeave={hoverExit}
      />
     
      <SubContent/>

      <BackgroundExp/>

      <Proyects/>

      <TechStack/>
      <h1  onMouseEnter={hoverEnter} onMouseLeave={hoverExit} className='text-white bold'>ENLARGE</h1>

      </body>
    </>
     
    
  );
}

export default App;



