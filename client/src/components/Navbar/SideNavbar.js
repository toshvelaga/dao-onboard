import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import styles from '../../styles/styles'
import './SideNavbar.css'

function SideNavbar(props) {
  let navigate = useNavigate()

  return (
    <ul className='side-navbar'>
      {/* Members */}

      <li
        style={
          window.location.pathname === '/members'
            ? { backgroundColor: styles.sideNavbarHoverColor }
            : null
        }
        id='side-navbar-broadcasts-li'
        onClick={() => navigate('/members')}
      >
        <div
          style={
            window.location.pathname === '/members' ? { color: '#fff' } : null
          }
          className='side-navbar-icon'
        >
          <FaIcons.FaUsers size={styles.sideNavbarIconSize} />
        </div>
        <div
          style={
            window.location.pathname === '/members' ? { color: '#fff' } : null
          }
          className='side-navbar-title'
        >
          Members
        </div>
      </li>
      {/* Settings */}
      <li
        onClick={() => {
          navigate('/settings')
        }}
        style={
          window.location.pathname === '/settings'
            ? { backgroundColor: styles.sideNavbarHoverColor }
            : null
        }
      >
        <div
          style={
            window.location.pathname === '/settings' ? { color: '#fff' } : null
          }
          className='side-navbar-icon'
        >
          <FaIcons.FaCogs size={styles.sideNavbarIconSize} />
        </div>
        <div
          style={
            window.location.pathname === '/settings' ? { color: '#fff' } : null
          }
          className='side-navbar-title'
        >
          Settings
        </div>
      </li>
    </ul>
  )
}

export default SideNavbar
