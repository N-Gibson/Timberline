import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Nav } from "../src/Components/Nav/Nav";
import { Footer } from "../src/Components/Footer/Footer";
import Home from "../src/Components/Home/Home";
import History from "./Components/History/History";

function App() {
  return (
    <main className="App">
      <Nav active="home" />
      <Route exact path="/" render={() => <Home />} />
      <Route path="/about" render={() => <Home />} />
      <Route path="/history" render={() => <History />} />
      <Footer />
    </main>
  );
}

export default App;
