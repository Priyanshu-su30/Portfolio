import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Body from './components/body';
import About from './components/about';
import Project from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';



function App() {
  return (
    <>
      <Navbar/>
      <Body/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
