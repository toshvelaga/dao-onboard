import React, { useState, useLayoutEffect } from 'react'

import SideNavbar from './SideNavbar'
import './Navbar.css'

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false)
  const [width, setWidth] = useState(0)

  useLayoutEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth
      setWidth(newWidth)
      console.log('updating width')
    }

    window.addEventListener('resize', updateWindowDimensions)

    return () => window.removeEventListener('resize', updateWindowDimensions)
  }, [])

  return (
    <>
      <SideNavbar />
    </>
  )
}

export default Navbar
