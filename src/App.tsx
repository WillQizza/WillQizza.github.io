import { useRef } from 'react';
import './App.scss';
import Contact from './components/Contact';
import Experiences from './components/Experiences';
import Landing from "./components/Landing";
import NavigationBar from './components/Nav';
import Projects from './components/Projects';

function App() {
  const waypoints = {
    landing: useRef(null),
    projects: useRef(null),
    experiences: useRef(null),
    contact: useRef(null)
  };

  return (
    <>
      <NavigationBar waypoints={waypoints} />
      <Landing waypoint={waypoints.landing} projectsWaypoint={waypoints.projects} />
      <Projects waypoint={waypoints.projects} />
      <Experiences waypoint={waypoints.experiences} />
      <Contact waypoint={waypoints.contact} />
    </>
  );
}

export default App;
