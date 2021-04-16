import React, { useState } from 'react'

import Search from '../search/Search'
import SearchResults from '../searchResults/SearchResults'

import './jobsPage.scss'

const JobsPage = (props) => {
  const [jobs, setJobs] = useState([])

  const fetchJobs = async () => {
    try {
      const response = await fetch("/api/v1/jobs")
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const responseBody = await JSON.parse(response)
      const jobs = responseBody.jobs
      setJobs(jobs)
    } catch (error) {
      console.error(`Error in fetch: ${error}`)
    }
  }

  return (
    <div className='job-page-container'>
      <div className='job-search-wrapper'>
        <img src='' />
        <h1 className='job-search-title'>Welcome to Zen Apps</h1>
        <h3 className='job-search-subtitle'>
          Your dream job is waiting
        </h3>
        <Search searchJobs={searchJobs} />
      </div>
      <div className='search-results-wrapper'>
        <SearchResults jobs={jobs} />
      </div>
      <img src='https://image.shutterstock.com/shutterstock/photos/1620022015/display_1500/stock-vector-vector-illustration-aimed-at-the-goal-increase-motivation-way-to-achieve-the-goal-teamwork-help-1620022015.jpg' alt='Helping Hand' />
    </div>
  )
}

export default JobsPage