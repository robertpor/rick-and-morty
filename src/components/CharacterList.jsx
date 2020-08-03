import React, { useEffect, useState } from 'react';
import Character from './Character';
import Button from './Button';
import FilterForm from './FilterForm';
import axios from 'axios';

function CharacterList() {
  const [characterList, setCharacterList] = useState({
    results: [],
  });

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/').then((res) => {
      setCharacterList(res.data);
    });
  }, []);

  function handleClick(clickType) {
    if (clickType === 'next') {
      const newQuery = characterList.info.next;
      axios.get(newQuery).then((res) => {
        setCharacterList(res.data);
      });
      document.documentElement.scrollTop = 400;
    } else if (clickType === 'back') {
      const newQuery = characterList.info.prev;
      if (newQuery !== null) {
        axios.get(newQuery).then((res) => {
          setCharacterList(res.data);
        });
        document.documentElement.scrollTop = 400;
      }
    }
  }

  function handleSubmit(searchParams) {
    const { inputText, status, gender } = searchParams;
    let inputStatus = '';
    let inputGender = '';

    if (status !== 'dead-or-alive') {
      inputStatus = status;
    }

    if (gender !== 'all') {
      inputGender = gender;
    }
    const newQuery = `https://rickandmortyapi.com/api/character/?name=${inputText}&status=${inputStatus}&gender=${inputGender}`;
    axios
      .get(newQuery)
      .then((res) => {
        if (res.status === 200) {
          setCharacterList(res.data);
        }
      })
      .catch((err) => {
        if (err) {
          setCharacterList({ results: [] });
        }
      });
  }

  return (
    <div className='character-app'>
      <FilterForm onSubmit={handleSubmit} />
      <div className='page-buttons'>
        <Button function='back' key='' onClick={handleClick} />
        <Button function='next' onClick={handleClick} />
      </div>

      <div className='character-list'>
        {characterList.results.map((character, index) => (
          <Character
            key={index}
            name={character.name}
            img={character.image}
            status={character.status}
            origin={character.origin.name}
            species={character.species}
            gender={character.gender}
            appearances={character.episode.length}
            url={character.url}
          />
        ))}
      </div>
      <div className='page-buttons'>
        <Button function='back' onClick={handleClick} />
        <Button function='next' onClick={handleClick} />
      </div>
    </div>
  );
}

export default CharacterList;
