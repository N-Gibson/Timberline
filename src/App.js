import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Nav } from '../src/Components/Nav/Nav';
import { Home } from '../src/Components/Home/Home';

function App() {
  return (
    <main className="App">
      <Nav active="home"/>
      <Route exact path="/" render={() => <Home />}/>
    </main>
  );
}

export default App;
