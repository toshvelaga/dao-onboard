import React from 'react'
import './TimeInput.css'

const TimeInput = (props) => {
  return (
    <div>
      <label className='time-input-label'>{props.label}</label>
      <input
        className='time-input'
        style={{
          padding: '.5rem',
          fontSize: '20px',
        }}
        type='time'
        id='appt'
        name='appt'
        value={props.value}
        min='09:00'
        max='18:00'
        required
        onChange={props.onChange}
      ></input>
    </div>
  )
}

export default TimeInput
