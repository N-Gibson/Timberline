import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Nav } from '../src/Components/Nav/Nav';
import { Home } from '../src/Components/Home/Home';
import { Footer } from '../src/Components/Footer/Footer'; 

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" render={() => <Home />}/>
      <Footer />
    </div>
  );
}

export default App;
