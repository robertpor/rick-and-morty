import React, { useState } from 'react';

function Filter(props) {
  const [filterName, setFilterName] = useState('');

  function handleChange(event) {
    const newFilterName = event.target.value;
    setFilterName(newFilterName);
    props.handleFilter(newFilterName);
  }

  return (
    <div>
      <input type='text' onChange={handleChange} value={filterName} />
    </div>
  );
}

export default Filter;
