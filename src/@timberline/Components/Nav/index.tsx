import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AppBar, Tabs, Tab, IconButton } from '@material-ui/core'

import timberline_logo from '@timberline/assets/timberline-const.png'

import './Nav.scss'
import { useStyles } from './style'

interface NavProps {
  props: any
}

interface LinkTabProps {
  label?: string
}

interface TabNameToIndexProps {
  0: string
  1: string
  2: string
  3: string
}

interface TabIndexToNameProps {
  home: number
  about: number
  projects: number
  contact_us: number
}

const Nav: React.FC<NavProps> = () => {
  const history = useHistory()
  const classes = useStyles()

  const tabNameToIndex = {
    0: 'home',
    1: 'about',
    2: 'projects',
    3: 'contact_us',
  }

  const tabIndexToName = {
    home: 0,
    about: 1,
    projects: 2,
    contact_us: 3,
  }

  const [activeTab, setActiveTab] = useState(
    tabIndexToName[
      history.location.pathname.slice(1) as keyof TabIndexToNameProps
    ],
  )

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    event.preventDefault()
    history.push(`${tabNameToIndex[newValue as keyof TabNameToIndexProps]}`)
    setActiveTab(newValue)
  }

  const LinkTab = (props: LinkTabProps) => {
    return <Tab {...props} />
  }

  return (
    <>
      <AppBar className={classes.appBar} position="fixed">
        <IconButton disabled={true}>
          {
            <img
              className={classes.logo}
              src={timberline_logo}
              alt="timberline logo"
            />
          }
        </IconButton>
        <Tabs value={activeTab} onChange={handleChange}>
          <LinkTab label="Home" />
          <LinkTab label="About" />
          <LinkTab label="Projects" />
          <LinkTab label="Contact Us" />
        </Tabs>
      </AppBar>
    </>
  )
}

export { Nav }
