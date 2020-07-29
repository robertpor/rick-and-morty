import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Character from './components/Character';
import Button from './components/Button';
const axios = require('axios').default;

function App() {
  const [characters, setCharacters] = useState({
    results: [],
  });

  /* Initial Page Load */
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character').then((response) => {
      setCharacters(response.data);
    });
  }, []);

  console.log(characters.results);

  /* Changing Pages */
  function handlePageChange(clickType) {
    if (clickType === 'next') {
      axios.get(characters.info.next).then((response) => {
        setCharacters(response.data);
      });
    } else if (clickType === 'back') {
      if (characters.info.prev !== null) {
        axios.get(characters.info.prev).then((response) => {
          setCharacters(response.data);
        });
      }
    }
  }

  /*Using the Filter Option to search for "Name" */
  function handleFilter(newName) {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${newName}`)
      .then((response) => {
        setCharacters(response.data);
      });
  }

  return (
    <div className='App'>
      <h1>Welcome to the Rick and Morty Character App</h1>
      <Button function='back' handlePageChange={handlePageChange} />
      <Button function='next' handlePageChange={handlePageChange} />
      <Filter handleFilter={handleFilter} />
      {characters.results.map((character) => (
        <Character
          id={character.id}
          key={character.id}
          image={character.image}
          name={character.name}
          status={character.status}
          species={character.species}
        />
      ))}
    </div>
  );
}

export default App;
