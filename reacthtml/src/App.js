import Home from './pages/Home';
import Albums from './pages/Albums';
import Apple from './pages/Apple';

import Header from './components/Header';
import Footer from './components/Footer';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './styles/common.css';
//import './styles/styles_artist.css';
//import './styles/styles_discography.css'

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/albums" element={<Albums/>}/>
          <Route path="/apple" element={<Apple/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
