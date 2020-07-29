import React from 'react';

function Button(props) {
  function handleClick() {
    props.handlePageChange(props.function);
  }

  return <button onClick={handleClick}>{props.function}</button>;
}

export default Button;
