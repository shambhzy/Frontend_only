import React,{useState} from 'react';
import Card from './components/Card';
import Greeting from './components/Greeting';
import Navbar from './components/Navbar';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Card } from "react-bootstrap";
import trialcard from './components/trialcard';
import Home from './Home';
import Land from './Land';
import Login from './land-components/Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Register from './land-components/Register';
import Try from './components/Try';
import About from './land-components/About';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path ="/land" element={<Land/>}/>
          <Route path ="/login" element={<Login/>}/>
          <Route path ="/reg" element={<Register/>}/>
          <Route path="/tys" element={<Try/>}/>
          <Route path="/abt" element={<About/>}/>
        </Routes>
      </Router>
      
     
    
    </div>
  );
}

export default App;
