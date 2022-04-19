import React from 'react'
import './PrimaryButton.css'

function PrimaryButton(props) {
  return (
    <button style={props.style} className='button' onClick={props.onClick}>
      {props.title}
    </button>
  )
}

export default PrimaryButton
