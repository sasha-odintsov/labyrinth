import './App.css';
import { useState, useEffect } from 'react';
import Controls from './Controls';

function App() {
  const gameArea = [
    [1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 2, 2, 2, 0, 2, 0, 2, 2, 2, 0, 2, 0, 2, 0, 2, 0, 2, 2, 2],
    [0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 2, 2, 2, 0, 2, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 2, 0],
    [0, 2, 0, 0, 0, 2, 0, 2, 0, 2, 2, 2, 0, 2, 0, 0, 0, 0, 2, 0],
    [0, 2, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 2, 0, 2, 2, 2, 2, 2, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0],
    [2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2],
    [0, 0, 0, 0, 0, 2, 2, 2, 0, 2, 2, 2, 0, 0, 0, 2, 0, 2, 0, 0],
    [2, 2, 0, 2, 2, 2, 0, 0, 0, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2],
    [0, 0, 0, 2, 0, 0, 0, 2, 2, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 0, 2, 2, 0, 0, 0, 2, 0, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 2, 0, 2, 2, 2, 0, 2, 0, 0, 0, 0, 2, 2],
    [2, 2, 2, 0, 2, 2, 0, 2, 0, 2, 0, 0, 0, 2, 0, 2, 0, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 2, 2, 0, 2, 0, 0, 0, 0],
    [0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 0, 0, 2, 2, 2, 2, 0],
    [2, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 2, 0, 2, 2, 0, 0, 2, 0],
    [0, 0, 0, 2, 0, 2, 2, 2, 0, 2, 0, 0, 2, 0, 2, 0, 0, 2, 2, 0],
    [0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 0, 2, 2, 0, 2, 2, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0]
  ];
  
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
    if(newArea[x][y + 1] === 0) {
      newArea[x][y] = 0;
      newArea[x][y + 1] = 1;
      setArea(newArea)
    }
  }
  function moveLeft() {
    if(newArea[x][y - 1] === 0) {
      newArea[x][y] = 0;
      newArea[x][y - 1] = 1;
      setArea(newArea)
    }
  }
  function moveUp() {
    if(x > 0) {
      if(newArea[x - 1][y] === 0) {
        newArea[x][y] = 0;
        newArea[x - 1][y] = 1;
        setArea(newArea)
      }
    }
  }
  function moveDown() {
    if(x < newArea.length - 1) {
      if(newArea[x + 1][y] === 0) {
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
    <div className="wrapper">
      <div className="area">
        {area.map((row, i) => {
          return (<div key={i} className='row'>
            {row.map((item, i) => {
              return (<div key={i} className='column'>
                {item === 1 && (<div key={i} className='player'></div>)} 
                {item === 2 && (<div key={i} className='wall'></div>)} 
              </div>)
            })}
          </div>)
        })}
      </div>
      <Controls 
        right={moveRight} 
        left={moveLeft}
        up={moveUp}
        down={moveDown}
      />
    </div>
  );
}

export default App;
