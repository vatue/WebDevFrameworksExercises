import React from 'react';
import './App.css';

import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Coronavirus from './components/Coronavirus';
import MostReadNews from './components/MostReadNews';
import SideBar from './components/SideBar';



function App() {
  return (
    <div >
      <h1> <Header /> </h1>
      <p> <SubHeader /> </p>
      <p> <MostReadNews /> </p>
      <p> <Coronavirus /> </p>
      <p> <SideBar /> </p> 
    </div>
  );
}

export default App;
