import { useState, createContext, useEffect } from "react";
import { gameArea } from '../data/data';

export const MovingContext = createContext();

export const MovingState = ({ children }) => {
  const [area, setArea] = useState(gameArea);

  const [x, setX] = useState();
  const [y, setY] = useState();
  useEffect(() => {
    area.forEach((row, indexRow) => {
      row.forEach((item, indexColumn) => {
        if(item === 1) {
          setX(indexRow)
          setY(indexColumn)
        }  
      })
    })  
  }, [area]) 
  
  const newArea = [...area];

  function moveRight() {
    if(y < newArea[0].length - 1) {
      if(newArea[x][y + 1] !== 2) {
        newArea[x][y] = 0;
        newArea[x][y + 1] = 1;
        setArea(newArea)
      }
    }
  }
  function moveLeft() {
    if(y > 0) {
      if(newArea[x][y - 1] !== 2) {
        newArea[x][y] = 0;
        newArea[x][y - 1] = 1;
        setArea(newArea)
      }
    }
  }
  function moveUp() {
    if(x > 0) {
      if(newArea[x - 1][y] !== 2) {
        newArea[x][y] = 0;
        newArea[x - 1][y] = 1;
        setArea(newArea)
      }
    }
  }
  function moveDown() {
    if(x < newArea.length - 1) {
      if(newArea[x + 1][y] !== 2) {
        newArea[x][y] = 0;
        newArea[x + 1][y] = 1;
        setArea(newArea)
      }
    }
  }
  function handleKeyDown (event) {
    if (event.key === 'ArrowRight') {
      moveRight();
    }
    if (event.key === 'ArrowDown') {
      moveDown();
    }
    if (event.key === 'ArrowUp') {
      moveUp();    
    }
    if (event.key === 'ArrowLeft') {
      moveLeft();    
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })
  return (
    <MovingContext.Provider value={{area, moveRight, moveLeft, moveUp, moveDown}}>
      {children}
    </MovingContext.Provider>
  )  
}