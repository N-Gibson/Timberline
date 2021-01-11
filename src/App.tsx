import React from 'react'
import './App.scss'
import { Route } from 'react-router-dom'
import {
  Home,
  About,
  History,
  Projects,
  ContactUs,
} from '@timberline/Components'

function App() {
  return (
    <main className="App">
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/about" render={() => <About />} />
      <Route path="/projects" render={() => <Projects />} />
      <Route path="/contact-us" render={() => <ContactUs />} />
      <Route path="/history" render={() => <History />} />
    </main>
  )
}

export default App
