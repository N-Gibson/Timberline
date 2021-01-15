import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Tabs, Tab, Box, Typography } from '@material-ui/core'

import timberline_logo from '@timberline/assets/timberline-const.png'

import './Nav.scss'

interface NavProps {
  active: string
  props: any
}

interface LinkTabProps {
  label?: string
  href?: string
}

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

const Nav: React.FC<NavProps> = ({ active, props }) => {
  // const idleButton = 'nav_button'
  // const activeButton = 'nav_button active_button'
  const [activeTab, setActiveTab] = useState(0)
  const { history } = props

  const tabNameToIndex = {
    0: 'home',
    1: 'about',
    2: 'projects',
    3: 'contact-us',
  }

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue)
    console.log(history)
    // history.push(`${tabNameToIndex as any[typeof newValue]}`)
  }

  const LinkTab = (props: LinkTabProps) => {
    return (
      <Tab
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault()
        }}
        {...props}
      />
    )
  }

  const TabPanel = (props: TabPanelProps) => {
    const { children, value, index } = props

    return (
      <div>
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    )
  }

  return (
    // <header>
    //   <Link to="/">
    //     <img id="timberline_logo" src={timberline_logo} alt="timberline logo" />
    //   </Link>
    //   <section id="nav_buttons_container">
    //     <Link to="/about">
    //       <button
    //         className={active === 'about' ? activeButton : idleButton}
    //         id="about_nav_button"
    //       >
    //         About
    //       </button>
    //     </Link>
    //     <Link to="/projects">
    //       <button
    //         className={active === 'projects' ? activeButton : idleButton}
    //         id="projects_nav_button"
    //       >
    //         Projects
    //       </button>
    //     </Link>
    //     <Link to="/contact-us">
    //       <button
    //         className={active === 'contact' ? activeButton : idleButton}
    //         id="contact_us_nav_button"
    //       >
    //         Contact Us
    //       </button>
    //     </Link>
    //   </section>
    // </header>
    <>
      <AppBar position="static">
        <Tabs value={activeTab} onChange={handleChange}>
          <LinkTab label="Home" href="/" />
          <LinkTab label="About" href="/about" />
          <LinkTab label="Projects" href="/projects" />
          <LinkTab label="Contact Us" href="/contact-us" />
        </Tabs>
      </AppBar>
      <TabPanel value={activeTab} index={activeTab}></TabPanel>
      {/* <TabPanel value={activeTab} index={1}></TabPanel>
      <TabPanel value={activeTab} index={2}></TabPanel>
      <TabPanel value={activeTab} index={3}></TabPanel> */}
    </>
  )
}

export { Nav }
