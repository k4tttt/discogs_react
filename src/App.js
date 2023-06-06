import React from 'react';
import Home from './pages/Home';
import Albums from './pages/Albums';
import Apple from './pages/Apple';
import VideoForm from './pages/VideoForm';

import Header from './components/Header';
import Footer from './components/Footer';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/apple" element={<Apple />} />
          <Route path='/video+form' element={<VideoForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}  

export default App;
