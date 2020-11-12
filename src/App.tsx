import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import History from "./Components/History/History";
import Projects from "./Components/Projects/Projects";
import ContactUs from "./Components/ContactUs/ContactUs";

function App() {
  return (
    <main className="App">
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/about" render={() => <About />} />
      <Route path="/projects" render={() => <Projects />} />
      <Route path="/contact-us" render={() => <ContactUs />} />
      <Route path="/history" render={() => <History />} />
    </main>
  );
}

export default App;
