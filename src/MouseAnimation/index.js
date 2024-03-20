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
          border:0,
          backgroundColor: 'rgba(33,150,243, 0.0)',

          transition: {
            type: 'tween', // Change the transition type (e.g., spring, tween, etc.)
            duration: 0.001,   // Change the duration of the transition
                // Adjust the damping of the spring animation
          }
        }
      
      }

      const smallVariants ={
        default: {
          x:mousePosition.x - 6,
          y:mousePosition.y - 6
        },
        hover:{
          x:mousePosition.x - 40,
          y:mousePosition.y - 40,
          height: 100,
          width:100,
          backgroundColor: 'rgba(33,150,243, 0.3)',
          transition: {
            type: 'spring', // Change the transition type (e.g., spring, tween, etc.)
            duration: 2,   // Change the duration of the transition
            stiffness: 500,  // Adjust the stiffness of the spring animation
            damping: 30,     // Adjust the damping of the spring animation
          }
        }
      
      }


      const [smallCursorVariant, smallSetCursorVariant] =useState('default')


      
      const hoverEnter = () =>{setCursorVariant('hover')}
      
      const hoverExit = () =>{ setCursorVariant('default')}
      
      
  return {smallCursorVariant, smallVariants, variants, cursorVariant, hoverEnter, hoverExit }
  
}

export { MouseAnimation };

