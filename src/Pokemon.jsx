import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Pokemon(props) {
  const { num, setNum } = props;
  const [pokemon, setPokemon] = useState([]);

  const [newNum, setNewNum] = useState(num);

  
  const getPokemon = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${num}`)
    .catch(err => {
        console.log(err)
        return;
      });
      setPokemon(res.data.results);
    };

  useEffect(() => {
    getPokemon();
  }, [num]);

  const pokemonList = pokemon.map(monster => <li key={monster.name}>{monster.name}</li>);

  const handleLimit = () => {
    setNum(newNum);
    setNewNum("");
  };

  return (
      <div>
        <input type="number" value={newNum} onChange={(e) => setNewNum(e.target.value)}/>
        <button onClick={handleLimit}>change limit</button>
        <ul>{pokemonList}</ul>
      </div>
    )
  }
