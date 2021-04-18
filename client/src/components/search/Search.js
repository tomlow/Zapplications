import React, { useState } from 'react'

import './search.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons'


const Search = ({ searchJobs }) => {
  const [searchCriteria, setSearchCriteria] = useState({
    title: '',
    location: '',
    level: '',
    fullTime: 'Full Time',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setSearchCriteria({ ...searchCriteria, [name]: value })
  }

  return (
    <form className="search-form" onSubmit={searchJobs}>
      <FontAwesomeIcon icon={faSearch} className='search-icon' />
      <input
        type="text"
        name="title"
        className="input input-long"
        value={searchCriteria.title || ''}
        placeholder="Job title or keywords"
        onChange={handleInputChange}
      />
      <FontAwesomeIcon icon={faMapMarkerAlt} className='search-icon' />
      <input
        type="text"
        name="location"
        className="input input-long"
        value={searchCriteria.location || ''}
        placeholder="City or Zip code"
        onChange={handleInputChange}
      />
      <label className='full-time-checkbox'>
        <select
          name="fullTime"
          className="input"
          label="Full time only"
          checked={searchCriteria.fullTime}
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
          name='level'
          onChange={handleInputChange}
          value={searchCriteria.level}
        >
          <option>Level</option>
          <option value='Internship'>Internship</option>
          <option value='Entry Level'>Entry Level</option>
          <option value='Mid-Level'>Mid Level</option>
          <option value='Mid-Senior level'>Mid-Senior level</option>
          <option value='Senior level'>Senior level</option>

        </select>
      </label>

      <button className='search-button' type="submit">Find Job</button>
    </form>
  )
}

export default Search