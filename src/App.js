import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import React from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Auction from './components/Auction';
import { DiscoverFunction, anotherFunction } from './components/DiscoverFunctions';

function App() {

  DiscoverFunction();
  anotherFunction();
  return (
    <div className="App">
      <Navbar></Navbar>
      <Welcome></Welcome>
      <Auction></Auction>
      <Header></Header>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
}

export default App;
