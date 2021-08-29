import React, { useEffect, useRef } from 'react';
import './App.scss';
import ContactMe from './ContactMe/ContactMe'
import Header from './Header/Header'
import Introduction from './Introduction/Introduction';
import About from './About/About'
import Certificate from './Certificate/Certificate'
import Project from './Project/Project'
import Footer from './Footer/Footer'

function App() {
  const introSection = useRef(null);
  const aboutSection = useRef(null);
  const certSection = useRef(null);
  const projectSection = useRef(null);
  const contactSect = useRef(null);


  return (
    <div className='background-container'>
      <Header />
      <div className='component-container'>
        <Introduction />
        <About />
        <Certificate />
        <Project />
        <ContactMe />
      </div>
      <Footer />
    </div>


  );

}

export default App;
