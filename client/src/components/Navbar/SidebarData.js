import React from 'react'
import * as FaIcons from 'react-icons/fa'
import styles from '../../styles/styles'

export const SidebarData = [
  {
    title: 'Members',
    path: '/members',
    icon: <FaIcons.FaUsers size={styles.sideNavbarIconSize} />,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <FaIcons.FaCogs />,
  },
]
