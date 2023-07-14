import './App.scss';
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
    </>
  );
}

export default App;
