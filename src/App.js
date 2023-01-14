import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import ParticlesBg from 'particles-bg';

function App() {
  return (
    <>
    <Header />
    <Main/>
    <Footer />
    <ParticlesBg type="cobweb" bg={true} />
    </>
  )
}

export default App;
