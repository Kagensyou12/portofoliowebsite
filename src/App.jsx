import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styling/App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AboutMe from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Project from './pages/Project.jsx';


function Home() {
  return (
    <>
  <div className='p1'>
  <div className="text-content">
    <h1>Hi, I'm Hadisurya</h1>
    <p> 
      I am a passionate Software Engineer and an undergraduate student specializing in Computer Science at Bina Nusantara University. With a strong enthusiasm for technology, I am dedicated to continuous learning and staying updated with the latest advancements.
    </p>
    <p>
      My key strengths include problem-solving and rapid learning, which enable me to tackle complex challenges and adapt to new technologies quickly. I thrive in dynamic environments where innovation and creativity are valued.
    </p>
    <p>
      I am excited about the opportunity to contribute my skills and knowledge to meaningful projects and collaborate with others to achieve great outcomes.
    </p>
  </div>
</div>
<div className="image-container">
  <img src="\Portofolio.jpg" alt="Portofolio" className="circular-image" />
</div>
</>
  );
}
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <main className='body'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/about' element={<AboutMe />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/projects' element={<Project />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
