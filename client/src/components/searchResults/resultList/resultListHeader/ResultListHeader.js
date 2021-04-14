import React from 'react' 

import './resultListHeader.scss'

const ResultListHeader = (props) => {
  return(
    <ul className='results-header'>
      <li>Company</li>
      <li>Position</li>
      <li>Level</li>
      <li>Post</li>
      <li>Apply</li>
    </ul>
  )
}

export default ResultListHeader