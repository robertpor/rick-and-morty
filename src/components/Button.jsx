import React from 'react';

function Button(props) {
  function handleClick(e) {
    props.onClick(e.target.name);
  }

  return (
    <button className='page-button' onClick={handleClick} name={props.function}>
      {props.function}
    </button>
  );
}

export default Button;
