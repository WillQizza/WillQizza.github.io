import projects from "../data/projects.json";

import { Component, ReactElement } from "react";
import "./Projects.scss";
import Project from "./Project";

export default class Projects extends Component {

    render() {
        const reactProjectElements : ReactElement[][] = [
            [],
            [],
            []
        ];

        for (let i = 0; i < projects.length; i++) {
            const project = projects[i];

            const columnIndex = i % reactProjectElements.length;
            reactProjectElements[columnIndex].push(<Project name={project.name} description={project.description} skills={project.skills} repository={project.repository} />);
        }
        
        return <div id="projects-container">
            <h1>Projects</h1>
            <hr />
            <div id="projects">
                { Array.from({ length: reactProjectElements.length }).map((_, i) => <div className="projects-column">{reactProjectElements[i]}</div>) }
            </div>
        </div>
    }

}