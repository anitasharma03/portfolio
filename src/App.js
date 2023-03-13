import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap/js/src/collapse.js";


import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <div className="App">
     <Header/>
     <AboutMe/>
     <Education/>
     <Skills/>
     <Experience/>
     <Portfolio/>
     <Contact/>
    </div>
  );
}

export default App;
