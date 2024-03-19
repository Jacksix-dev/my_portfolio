import {useState, useEffect } from 'react';
import React from "react";
import {HeaderNav} from './HeaderNav'
import { MainContent } from "./MainContent";
import { SubContent } from "./SubContent";
import { BackgroundExp } from "./BackgroundExp";
import {Proyects} from './Proyects'
import { TechStack } from "./TechStack";
import {motion} from 'framer-motion'
import { Footter } from './Footter';
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
     className="z-10 bg-sky-500 rounded-full fixed pointer-events-none	w-10 h-10"/>
    
     <header className="App-header">
    
      <HeaderNav
      hoverEnter={hoverEnter} hoverExit={hoverExit}>

      </HeaderNav>
      </header>
      <body className='App-background'>
      <MainContent
        hoverEnter={hoverEnter} hoverExit={hoverExit}
      />
     
      <SubContent/>

      <BackgroundExp/>

      <Proyects
      hoverEnter={hoverEnter} hoverExit={hoverExit}/>

      <TechStack/>
      <Footter/>
      </body>
    </>
     
    
  );
}

export default App;



