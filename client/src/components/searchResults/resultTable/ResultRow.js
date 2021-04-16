import React from 'react'
import { Link } from "react-router-dom";
import TimeAgo from 'react-timeago'

const ResultRow =({job}) => {

  return (
    <>
      <div class="flex-table row" role="rowgroup">
        <div class="flex-row first" role="cell">
          <span className="img-wrapper">
            <img
              className='company-image'
              src={job.img}
              alt='company logo placeholder'
            />
          </span>{job.company}
        </div>
        <div class="flex-row" role="cell">{job.position}</div>
        <div class="flex-row" role="cell">{job.level}</div>
        <div class="flex-row" role="cell">5 
          <TimeAgo date={job.createdAt} />
        </div>
        <div class="flex-row last" role="cell">
          <Link to={`/jobs/${job.id}`}><p className='apply-btn'>Apply</p></Link>
        </div>
      </div>
    </>
  )
}

export default ResultRow
