import './App.scss';
import Landing from "./components/Landing";
import NavigationBar from './components/Nav';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <NavigationBar />
      <Landing />
      <Projects />
    </>
  );
}

export default App;
