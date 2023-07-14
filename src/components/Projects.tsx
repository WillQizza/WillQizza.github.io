import projects from "../data/projects.json";

import { Component } from "react";
import "./Projects.scss";
import Project from "./Project";

const IDEAL_COLUMNS = 3;

export default class Projects extends Component {

    render() {
        
        return <div id="projects-container">
            <h1>Projects</h1>
            <hr />
            <div id="projects">
                { projects.map(project => <Project name={project.name} description={project.description} skills={project.skills} repository={project.repository} />) }
                { Array.from({ length: (projects.length - 1) % IDEAL_COLUMNS }).map(() => <div className="project placeholder"></div>) }
            </div>
        </div>
    }

}