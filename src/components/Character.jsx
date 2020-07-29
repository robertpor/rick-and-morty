import React from 'react';

function Character(props) {
  return (
    <div className='character-card'>
      <h3>{props.name}</h3>
      <img src={props.image} alt='' />
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
    </div>
  );
}

export default Character;
