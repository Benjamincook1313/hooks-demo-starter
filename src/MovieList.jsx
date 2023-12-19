import { useState } from 'react';

export default function MovieList() {
  const [movies, setMovies] = useState(['Alien', 'Predator', 'Alien Vs. Predator']);
  // This initializes our state value movies as an array with 3 items.

  const [inputValue, setInputValue] = useState('');
  // This will be used to hold the value of our input box.

  const moviesDisplay = movies.map((movie, i) => <h5 key={movie + i}> {movie} </h5>);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddMovie = (e) => {
    e.preventDefault();
    setMovies([...movies, inputValue]);
    setInputValue('');
  }


  return (
    <div>
      <h2>Movie List</h2>
      {moviesDisplay}
      <form onSubmit={(e) => handleAddMovie(e)} >
        <input type="text" value={inputValue} onChange={(e) => handleInput(e)} required/>
        <input type="submit" />
      </form>
    </div>
  );
}
