import React from 'react'
import './App.scss'
import { Route, Redirect } from 'react-router-dom'
import {
  Home,
  About,
  History,
  Projects,
  ContactUs,
  Nav,
  Footer,
} from '@timberline/Components'

function App(props: any) {
  return (
    <main className="App">
      <Nav props={props}></Nav>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/about" render={() => <About />} />
      <Route path="/projects" render={() => <Projects />} />
      <Route path="/contact_us" render={() => <ContactUs />} />
      <Route path="/history" render={() => <History />} />
      <Footer />
    </main>
  )
}

export default App
