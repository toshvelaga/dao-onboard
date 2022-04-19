import React from 'react'
import './Role.css'

const Role = (props) => {
  const backgroundColor = () => {
    if (props.title === 'Developer') {
      return 'red'
    }
    if (props.title === 'Marketer') {
      return 'green'
    }
    if (props.title === 'Designer') {
      return 'blue'
    }
    if (props.title === 'Biz Dev') {
      return 'orange'
    }
    if (props.title === 'Lurker') {
      return '#bc62ff'
    }
  }
  return (
    <p
      className='role-container'
      style={{
        background: backgroundColor(),
      }}
    >
      {props.title}
    </p>
  )
}

export default Role
