import React, { useEffect, useState } from 'react' 

import ResultFilter from './resultFilter/ResultFilter'
import ResultTable from './resultTable/ResultTable'

import './searchResults.scss'

const SearchResults = (props) => {
  
  const [jobs, setJobs] = useState([])
  
  const getJobs = async () => {
    try {
      const response = await fetch(`/api/v1/jobs`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const body = await response.json()
      setJobs(body.jobs)
    } catch (error) {
      console.error(error)
      console.error(`Error in fetch ${error.message}`)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    getJobs()
  }, [])

  return(
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