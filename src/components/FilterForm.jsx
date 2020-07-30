import React, { useState } from 'react';

function FilterForm(props) {
  const [nameInput, setNameInput] = useState('');
  const [status, setStatus] = useState('dead-or-alive');
  const [gender, setGender] = useState('female');

  function handleClick(e) {
    e.preventDefault();
    const filterElements = {
      inputText: nameInput,
      status: status,
      gender: gender,
    };
    props.onSubmit(filterElements);
  }

  function handleNameChange(e) {
    setNameInput(e.target.value);
  }

  function handleStatusChange(e) {
    setStatus(e.target.value);
  }

  function handleGenderChange(e) {
    setGender(e.target.value);
  }

  return (
    <form>
      <input type='text' id='input-text' onChange={handleNameChange} />
      <fieldset className='status-field' id='status-fieldset'>
        <div onChange={handleStatusChange}>
          <input
            type='radio'
            id='dead-or-alive'
            name='status'
            value='dead-or-alive'
          />
          <label htmlFor='dead-or-alive'>Dead or Alive</label>
          <input type='radio' id='alive' name='status' value='alive' />
          <label htmlFor='alive'>Alive</label>
          <input type='radio' id='dead' name='status' value='dead' />
          <label htmlFor='dead'>Dead</label>
        </div>
      </fieldset>

      <select name='gender' id='gender' onChange={handleGenderChange}>
        <option value='female'>Female</option>
        <option value='male'>Male</option>
        <option value='genderless'>Genderless</option>
        <option value='unknown'>Unknown</option>
        <option value='all'>All of the above</option>
      </select>

      <button type='submit' onClick={handleClick}>
        Search
      </button>
    </form>
  );
}

export default FilterForm;
