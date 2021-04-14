import React from 'react'

import Search from '../search/Search'

import './jobsPage.scss'

const JobsPage = (props) => {
  return (
    <div className='job-page-container'>
      <div className='job-page-title-wrapper'>
        <img src='' />
        <h1 className='job-page-title'>Welcome to Zen Apps</h1>
        <h3 className='job-page-subtitle'>
          Your dream job is waiting
        </h3>
        <Search />
      </div>
      <img src='https://image.shutterstock.com/shutterstock/photos/1620022015/display_1500/stock-vector-vector-illustration-aimed-at-the-goal-increase-motivation-way-to-achieve-the-goal-teamwork-help-1620022015.jpg' alt='Helping Hand'/>
    </div>
  )
}

export default JobsPage