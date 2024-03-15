import {React, useState, useEffect } from 'react';




function MouseAnimation() {

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
          backgroundColor: 'rgba(33,150,243, 0.3)'
          
        }
      
      }
      
      const hoverEnter = () =>{setCursorVariant('hover')}
      
      const hoverExit = () =>{ setCursorVariant('default')}
      
      
  return { variants, cursorVariant, hoverEnter, hoverExit }
  
}

export { MouseAnimation };

