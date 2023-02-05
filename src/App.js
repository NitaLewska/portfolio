import React from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import ParticlesBg from 'particles-bg';

function App() {
  return (
    <>
    <Header />
    <Main />
    <ParticlesBg type="cobweb" bg={true} num={100}/>
    </>
  )
}

export default App;
