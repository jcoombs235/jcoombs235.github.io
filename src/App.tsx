import React from "react";
import "./App.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
