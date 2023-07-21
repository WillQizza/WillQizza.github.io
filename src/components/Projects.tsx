import projects from "../data/projects.json";

import { Component } from "react";
import "./Projects.scss";
import Project from "./Project";
import { SectionProperties } from "./utils";

const IDEAL_COLUMNS = 3;

export default class Projects extends Component<SectionProperties> {

    render() {
        
        return <div id="projects-container" ref={this.props.waypoint}>
            <h1>Projects</h1>
            <hr />
            <div id="projects">
                { projects.map(project => <Project key={project.repository} name={project.name} description={project.description} skills={project.skills} repository={project.repository} />) }
                { Array.from({ length: (projects.length - 1) % IDEAL_COLUMNS }).map((_, index) => <div key={index} className="project placeholder"></div>) }
            </div>
        </div>
    }

}