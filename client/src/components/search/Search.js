import React, { useState } from 'react';

import './search.scss'

const Search = (props) => {
  const [state, setState] = useState({
    description: '',
    location: '',
    salary: '',
    full_time: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'full_time') {
      setState((prevState) => ({ ...state, [name]: !prevState.full_time }));
    } else {
      setState({ ...state, [name]: value });
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(state);
  }
  
  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        type="text"
        name="description"
        className="input"
        value={state.description || ''}
        placeholder="Enter search term"
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="location"
        className="input"
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
          <option>Desired Salary</option>
          <option value='20000'>$20,000</option>
          <option value='30000'>$30,000</option>
          <option value='40000'>$40,000</option>
          <option value='50000'>$50,000</option>
          <option value='60000'>$60,000</option>
          <option value='70000'>$70,000</option>
          <option value='80000'>$80,000</option>
          <option value='90000'>$90,000</option>
          <option value='100000'>$100,000</option>
          <option value='120000'>$120,000</option>
          <option value='140000'>$140,000</option>
          <option value='160000'>$160,000</option>
          <option value='180000'>$180,000</option>
          <option value='200000'>$200,000</option>
          <option value='250000'>$250,000</option>
          <option value='300000'>$300,000</option>
          <option value='350000'>$350,000+</option>
        </select>
      </label>

      <button className='search-button' type="submit">Find Job</button>
    </form>
  )
}

export default Search;