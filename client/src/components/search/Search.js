import React, { useState } from 'react';

import './search.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons'


const Search = (props) => {
  const [state, setState] = useState({
    description: '',
    location: '',
    salary: '',
    full_time: 'Full Time',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(state);
  }
  
  return (
    <form className="search-form" onSubmit={handleSearch}>
      <FontAwesomeIcon icon={faSearch} className='search-icon' />
      <input
        type="text"
        name="description"
        className="input input-long"
        value={state.description || ''}
        placeholder="Job title or keywords"
        onChange={handleInputChange}
      />
      <FontAwesomeIcon icon={faMapMarkerAlt} className='search-icon' />
      <input
        type="text"
        name="location"
        className="input input-long"
        value={state.location || ''}
        placeholder="City or Zip code"
        onChange={handleInputChange}
      />
      <label className='full-time-checkbox'>
        <select
          name="full_time"
          className="input"
          label="Full time only"
          checked={state.full_time}
          onChange={handleInputChange}
        >
          <option value='Full Time'>Full Time</option>
          <option value='Part Time'>Part Time</option>
          <option value='Remote'>Remote</option>
        </select>
      </label>
      <label>
        <select 
          className='input'
          name='salary' 
          onChange={handleInputChange}
          value={state.salary}
        >
          <option>Level</option>
          <option value='20000'>Internship</option>
          <option value='Entry Level'>Entry Level</option>
          <option value='Mid Level'>Mid Level</option>
          <option value='Mid-Senior level'>Mid-Senior level</option>
          <option value='Senior level'>Senior level</option>

        </select>
      </label>

      <button className='search-button' type="submit">Find Job</button>
    </form>
  )
}

export default Search;