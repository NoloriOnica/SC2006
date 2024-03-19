import React from 'react'
import './votingMidSection.css'

const VotingMidSection = () => {
  return (
    <div id="voting-midSection-container" class="gjs-grid-row">
    <div id="voting-mid-section" class="gjs-grid-column">
      <div id="time-left-row " class="gjs-grid-row">
        <div id="time-left-column" class="gjs-grid-column">
          <div id="time-left-text">Time Left:</div>
        </div>
        <div id="timer-container" class="gjs-grid-column">
          <div id="time-left">00:00</div>
        </div>
      </div><button type="button" id="filter-btn">Filters</button>
    </div>
    <div id="group-code-container" class="gjs-grid-column">
      <div id="group-code-row" class="gjs-grid-row">
        <div id="group-code-column" class="gjs-grid-column">
          <div id="group-code-text">Group Code: </div>
        </div>
        <div id="code-container" class="gjs-grid-column">
          <div id="code">CYXY</div>
        </div>
      </div>
    </div>
    <div id="selected-res-container" class="gjs-grid-column">
      <div id="selected-res-text">Your Selected Restaurant:</div>
      <div id="selected-res">McDonalds</div>
    </div>
  </div>
  )
}

export default VotingMidSection