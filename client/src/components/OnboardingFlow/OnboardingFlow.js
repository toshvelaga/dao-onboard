import React from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'
import RoundButton from '../Buttons/RoundButton'
import './OnboardingFlow.css'

const OnboardingFlow = (props) => {
  return (
    <div className='flow-container'>
      <h2
        style={{
          textAlign: 'center',
          marginTop: 0,
        }}
      >
        Welcome!
      </h2>
      <div className='steps-container'>
        {props.steps.map((step) => {
          return (
            <RoundButton
              onClick={props.handleStepChange}
              key={step.value}
              number={step.label}
            />
          )
        })}
      </div>
      <h3
        className='title'
        style={{
          textAlign: 'center',
        }}
      >
        {props.title}
      </h3>
      {props.children}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PrimaryButton onClick={props.onClick} title={props.btnTitle} />
      </div>
    </div>
  )
}

export default OnboardingFlow
