import './App.scss';
import Contact from './components/Contact';
import Experiences from './components/Experiences';
import Landing from "./components/Landing";
import NavigationBar from './components/Nav';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <NavigationBar />
      <Landing />
      <Projects />
      <Experiences />
      <Contact />
    </>
  );
}

export default App;
