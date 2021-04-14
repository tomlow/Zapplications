import React from 'react' 

import ResultFilter from './resultFilter/ResultFilter'
import ResultsList from './resultList/ResultList'

import './searchResults.scss'

const SearchResults = (props) => {
  return(
    <>
      <h3 className='results-title'>Results</h3>
      <div>
        <ResultFilter />
      </div>
      <div className='search-list-container'>
      <ResultsList />
      </div>
    </>
  )
}

export default SearchResults