import './App.css';
import { useContext } from 'react';
import Controls from '../Controls/Controls';
import Game from '../Game/Game';
import { MovingContext } from '../../context/context';

function App() {  
  const {moveRight, moveLeft, moveUp, moveDown} = useContext(MovingContext);
  
  return (
    <div className="wrapper">
      <Game />
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
