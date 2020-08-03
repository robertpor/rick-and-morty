import React, { useState, useEffect } from 'react';

function Character(props) {
  const [wantMore, setWantMore] = useState(false);

  function handleClick(e) {
    if (e.target.id === 'show-more') {
      setWantMore(true);
    } else if (e.target.id === 'show-less') {
      setWantMore(false);
    }
  }

  useEffect(() => {
    setWantMore(false);
  }, [props.name]);

  if (!wantMore) {
    return (
      <div id={props.name} className='character-card'>
        <img className='character-img' src={props.img} alt={props.name} />

        <h2>{props.name}</h2>
        <p>
          {props.status} - {props.species}
        </p>

        <button
          className='select-button'
          onClick={handleClick}
          name={props.name}
          id='show-more'
        >
          Find out More
        </button>
      </div>
    );
  } else {
    return (
      <div id={props.name} className='character-card'>
        <img className='character-img' src={props.img} alt={props.name} />
        <h2>{props.name}</h2>
        <p>
          {props.status} - {props.species}
        </p>
        <div className='extra-info'>
          <p>Number of Appearances: {props.appearances}</p>
          <p>Gender: {props.gender}</p>
          <p>Place of Origin: {props.origin}</p>
        </div>
        <button
          className='select-button'
          onClick={handleClick}
          name={props.name}
          id='show-less'
        >
          Show less
        </button>
      </div>
    );
  }
}

export default Character;
