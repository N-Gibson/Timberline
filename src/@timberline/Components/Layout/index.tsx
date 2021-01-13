import React from 'react'
import { Nav } from '../Nav'
import { Footer } from '../Footer'

interface LayoutProps {
  children: any
  active: string
  props: any
}

const Layout: React.FC<LayoutProps> = ({ children, active, props }) => {
  return (
    <>
      <Nav props={props} active={active} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export { Layout }
