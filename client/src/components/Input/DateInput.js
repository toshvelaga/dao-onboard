import React from 'react'
import currentDate from '../../utils/currentDate'
import './DateInput.css'

const DateInput = (props) => {
  return (
    <div className='date-input-container'>
      <label className='date-input-label'>{props.label}</label>
      <input
        className='date-input'
        type='date'
        id='start'
        name='trip-start'
        value={props.value}
        min={currentDate()}
        required
        onChange={props.onChange}
      />
    </div>
  )
}

export default DateInput
