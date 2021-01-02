import React from 'react'
import { Nav } from '../Nav'
import { Footer } from '../Footer'

interface LayoutProps {
  children: any
  active: string
}

const Layout: React.FC<LayoutProps> = ({ children, active }) => {
  return (
    <>
      <Nav active={active} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export { Layout }
