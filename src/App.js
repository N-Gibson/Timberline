import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Nav } from "../src/Components/Nav/Nav";
import { Footer } from "../src/Components/Footer/Footer";
import Home from "../src/Components/Home/Home";
import About from "../src/Components/About/About";

function App() {
  return (
    <main className="App">
      <Nav active="home" />
      <Route exact path="/" render={() => <Home />} />
      <Route path="/about" render={() => <About />} />
      <Footer />
    </main>
  );
}

export default App;
