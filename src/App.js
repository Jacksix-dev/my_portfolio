import React from "react";
import {HeaderNav} from './HeaderNav'
import { MainContent } from "./MainContent";
import { SubContent } from "./SubContent";
import { BackgroundExp } from "./BackgroundExp";
import {Proyects} from './Proyects'
import { TechStack } from "./TechStack";

import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <>
     <header className="App-header">
      <HeaderNav></HeaderNav>
      </header>
      <body className='App-background'>
      <MainContent/>

      <SubContent/>

      <BackgroundExp/>

      <Proyects/>

      <TechStack/>
      </body>
    </>
     
    
  );
}

export default App;



