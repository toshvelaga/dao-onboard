import React from 'react'
import styles from '../../styles/styles'
import './OnboardingIntro.css'

const OnboardingIntro = () => {
  const links = [
    {
      href: 'https://developerdao.notion.site/developerdao/Developer-DAO-Wiki-eff4dcb00bef46fbaa93e9e4cf940e2e',
      name: 'Wiki',
    },
    {
      href: 'https://forum.developerdao.com/',
      name: 'Forum',
    },
    {
      href: 'https://snapshot.org/#/devdao.eth',
      name: 'Snapshot',
    },
    {
      href: 'https://blog.developerdao.com/',
      name: 'Blog',
    },
  ]
  return (
    <div>
      <h3 style={{ color: styles.yellowOrangeColor }}>Vision</h3>
      <p>
        Developer DAO exists to accelerate the education and impact of a new
        wave of web3 builders.
      </p>
      <h3 style={{ color: styles.yellowOrangeColor }}>Useful links</h3>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <a className='onboarding-links' href={link.href}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OnboardingIntro
