import React from 'react'
import './RoundButton.css'

const RoundButton = (props) => {
  return (
    <button onClick={props.onClick} className='round-button'>
      {props.number}
    </button>
  )
}

export default RoundButton
