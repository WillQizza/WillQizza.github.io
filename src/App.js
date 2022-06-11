import React from 'react';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';


function App() {
  return (
    <>
      <NavigationBar />
      <Header />
      <AboutMe />
      <Projects />
    </>
  );
}

export default App;
