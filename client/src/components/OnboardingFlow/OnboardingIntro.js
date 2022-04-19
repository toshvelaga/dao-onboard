import React from 'react'
import styles from '../../styles/styles'
import './OnboardingIntro.css'

const OnboardingIntro = () => {
  return (
    <div>
      <h3 style={{ color: styles.yellowOrangeColor }}>Vision</h3>
      <p>
        Developer DAO exists to accelerate the education and impact of a new
        wave of web3 builders.
      </p>
      <h3 style={{ color: styles.yellowOrangeColor }}>Useful links</h3>
      <ul>
        <li>Wiki</li>
        <li>Forum</li>
        <li>Snapshot</li>
        <li>Blog</li>
      </ul>
    </div>
  )
}

export default OnboardingIntro
