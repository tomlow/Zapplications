import React from 'react'

import ResultRow from './ResultRow'

import './resultTable.scss'

const ResultTable = (props) => {
  return(
    <div className="table-container" role="table" aria-label="Available Positions">
      <div className="flex-table header" role="rowgroup">
        <div className="flex-row first" role="columnheader">Company</div>
        <div className="flex-row" role="columnheader">Position</div>
        <div className="flex-row" role="columnheader">Level</div>
        <div className="flex-row" role="columnheader">Post</div>
        <div className="flex-row last" role="columnheader">Apply</div>
      </div>
      <ResultRow/>
    </div>
  )
}

export default ResultTable