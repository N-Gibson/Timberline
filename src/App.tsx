import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { Home } from '@timberline/Components/Home'
import { About } from '@timberline/Components/About'
import { History } from '@timberline/Components/History'
import { Projects } from '@timberline/Components/Projects'
import { ContactUs } from '@timberline/Components/ContactUs'

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
