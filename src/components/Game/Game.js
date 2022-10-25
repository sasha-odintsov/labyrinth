import { useContext } from 'react';
import { MovingContext } from '../../context/context';
import './Game.css';

function Game() {
  const {area} = useContext(MovingContext);
  
  return (
    <div className="area">
      {area.map((row, i) => {
        return (<div key={i} className='row'>
          {row.map((item, i) => {
            return (<div key={i} className='column'>
              {item === 1 && (<div key={i} className='player'></div>)} 
              {item === 2 && (<div key={i} className='wall'></div>)} 
              {item === 3 && (<div key={i} className='exit'>&#10026;</div>)} 
            </div>)
          })}
        </div>)
      })}
    </div>
  )
}

export default Game;