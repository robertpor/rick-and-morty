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
        <h1>{props.name}</h1>
        <p>{props.status}</p>
        <button onClick={handleClick} name={props.name} id='show-more'>
          Find out More
        </button>
      </div>
    );
  } else {
    return (
      <div id={props.name} className='character-card'>
        <h1>{props.name}</h1>
        <p>{props.status}</p>
        <p>This is now displaying additional information</p>
        <button onClick={handleClick} name={props.name} id='show-less'>
          Show less
        </button>
      </div>
    );
  }
}

export default Character;
