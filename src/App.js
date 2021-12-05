import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Joke from './components/Joke';
import About from './components/About';
import Home from './components/Home';
import { Adding } from './components/Operations';

function App() {

  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/operations" element={<Adding />} />
          <Route path="/jokes" element={<Joke />} />          
        </Routes>
      </>
    </Router>
  );
}

export default App;