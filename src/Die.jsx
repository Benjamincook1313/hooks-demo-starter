import { useState } from 'react';
import './dice.css';

function getRandomNum(upperLimit) {
  return Math.ceil(Math.random() * upperLimit);
}

export default function Die(props){
  const { sides } = props;
  const [diceValue, setDiceValue] = useState(0);

  const roll = () => {
    const result = getRandomNum(sides);
    setDiceValue(result);
  };

  return(
    <button className='die' onClick={roll}>
      <i>sides={sides}</i>
      <b>{diceValue}</b>
    </button>
  ) 
}
