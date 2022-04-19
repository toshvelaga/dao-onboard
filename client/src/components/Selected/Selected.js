import React from 'react'
import Select from 'react-select'
import styles from '../../styles/styles'
import './Selected.css'

// react-select: https://www.npmjs.com/package/react-select

function Selected(props) {
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      color: 'black',
    }),
    control: (base) => ({
      ...base,
      height: '3rem',
      background: props.background,
      border: props.border,
    }),
  }
  return (
    <>
      <div style={props.style} className='selected-container'>
        <label
          style={{
            display: 'block',
            // fontWeight: 600,
            marginBottom: '.5rem',
            color: props.color,
          }}
          className='selected-label'
        >
          {props.label}
        </label>
        <Select
          styles={customStyles}
          className='selected'
          value={props.value}
          onChange={props.onChange}
          options={props.options}
          placeholder={props.placeholder}
          // defaultValue={props.defaultValue}
          // defaultInputValue={props.defaultInputValue}
          theme={(theme) => ({
            ...theme,
            // borderRadius: 0,
            colors: {
              ...theme.colors,
              // primary25: "hotpink",
              primary: styles.blueFontColor,
            },
          })}
        />
        <span style={errorStyles}>{props.errorMsg}</span>
      </div>
    </>
  )
}

const errorStyles = {
  color: 'red',
}

export default Selected
