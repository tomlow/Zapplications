import React from 'react'

import ResultFilter from './resultFilter/ResultFilter'
import ResultTable from './resultTable/ResultTable'

import './searchResults.scss'

const SearchResults = ({ jobs }) => {
  return (
    <>
      <h3 className='results-title'>Results</h3>
      <div>
        <ResultFilter />
      </div>
      <ResultTable jobs={jobs} />
    </>
  )
}

export default SearchResults