import './Controls.css';

function Controls({ up, down, right, left }) {
  return (
    <div className="controls__wrap">
      <button className="controls controls__up" onClick={up}>&#9650;</button>
        <div className="controls__secondary-wrap">
          <button className="controls controls__left" onClick={left}>&#9668;</button>
          <button className="controls controls__right" onClick={right}>&#9658;</button>
        </div>
      <button className="controls controls__down" onClick={down}>&#9660;</button>
    </div>
  )
}

export default Controls;