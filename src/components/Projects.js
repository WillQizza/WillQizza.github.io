import { Component } from "react";
import { Columns, Container } from "react-bulma-components";
import projectsJSON from './data/projects.json';
import Project from "./Project";

export default class Projects extends Component {

    constructor() {
        super();

        // Divide projects into separate cards
        this.projects = [[], [], [], []];
        for (let i = 0; i < projectsJSON.length; i++) {
            const project = projectsJSON[i];

            const columnIndex = i % 3;
            this.projects[columnIndex].push(<Project title={project.name}
                description={project.description}
                image={project.image}
                repository={project.repository}
                skills={project.skills} />);
        }
    }
    
    render() {
        return <Container style={{
            paddingTop: '3.25em'    // account for nav
        }}>
            <h1 className="title is-size-2 has-text-centered is-unselectable" style={{
                marginTop: '1em'
            }}>Projects</h1>
            <h2 className="subtitle has-text-centered is-unselectable">Click any card to view the Github repository!</h2>
            <hr />
            <Columns>
                <Columns.Column size="one-third">
                    {this.projects[0]}
                </Columns.Column>
                <Columns.Column size="one-third">
                    {this.projects[1]}
                </Columns.Column>
                <Columns.Column size="one-third">
                    {this.projects[2]}
                </Columns.Column>
            </Columns>
        </Container>;
    }

}