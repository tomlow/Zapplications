import React from 'react'
import { Link } from "react-router-dom";

const ResultRow =(props) => {
  return (
    <>
      <div class="flex-table row" role="rowgroup">
        <div class="flex-row first" role="cell">
          <span className="img-wrapper">
            <img
              className='company-image'
              src="https://image.freepik.com/free-vector/arrow-star-logo-template_1222-835.jpg"
              alt='company logo placeholder'
            />
          </span>Google
        </div>
        <div class="flex-row" role="cell">Software Engineer</div>
        <div class="flex-row" role="cell">Senior Level</div>
        <div class="flex-row" role="cell">5 Days</div>
        <div class="flex-row last" role="cell">
        <Link to={`/songs/${props.job.id}`}><p className='apply-btn'>Apply</p></Link>
        </div>
    </div>
    <div class="flex-table row" role="rowgroup">
      <div class="flex-row first" role="cell">
        <span className="img-wrapper">
          <img
            className='company-image'
            src="https://image.freepik.com/free-vector/arrow-star-logo-template_1222-835.jpg"
            alt='company logo placeholder'
          />
        </span>Google Bros
      </div>
      <div class="flex-row" role="cell">Software Engineer</div>
      <div class="flex-row" role="cell">Senior Level</div>
      <div class="flex-row" role="cell">5 Days</div>
      <div class="flex-row last" role="cell">
        <Link to={`/songs/${props.job.id}`}><p className='apply-btn'>Apply</p></Link>
        </div>
    </div>

  </>
  )
}

export default ResultRow