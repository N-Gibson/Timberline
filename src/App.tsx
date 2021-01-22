import React from 'react'
import './App.scss'
import { Route, Redirect } from 'react-router-dom'
import {
  Home,
  About,
  History,
  Projects,
  ContactUs,
} from '@timberline/Components'

function App(props: any) {
  return (
    <main className="App">
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home" render={() => <Home props={props} />} />
      <Route exact path="/about" render={() => <About props={props} />} />
      <Route path="/projects" render={() => <Projects props={props} />} />
      <Route path="/contact-us" render={() => <ContactUs props={props} />} />
      <Route path="/history" render={() => <History />} />
    </main>
  )
}

export default App
