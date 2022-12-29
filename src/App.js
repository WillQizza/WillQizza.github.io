import React from 'react';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Experiences from './components/Experiences';
import AboutMe from './components/AboutMe';


function App() {
  return (
    <>
      <NavigationBar />
      <Header />
      <AboutMe />
      <Experiences />
    </>
  );
}

export default App;
