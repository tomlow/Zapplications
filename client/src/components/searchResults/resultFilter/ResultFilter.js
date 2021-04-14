import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt } from '@fortawesome/free-solid-svg-icons'

import './resultFilter.scss'

const ResultFilter = (props) => {
  return(
    <ul className='results-filter'>
      <li>Categories</li>
      <li>Full-time</li>
      <li>Part-time</li>
      <li>Part-time</li>
      <li>Remote</li>
      <li>
        <FontAwesomeIcon icon={faListAlt} className='search-icon' />
      </li>
    </ul>
  )
}

export default ResultFilter