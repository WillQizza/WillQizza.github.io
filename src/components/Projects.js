import { Component } from "react";
import { Card, Columns, Container, Tag } from "react-bulma-components";
import projectsJSON from './data/projects.json';

export default class Projects extends Component {

    constructor() {
        super();

        // Divide projects into separate cards
        this.projects = [[], [], [], []];
        for (let i = 0; i < projectsJSON.length; i++) {
            const columnIndex = i % 3;
            this.projects[columnIndex].push(this._makeCardFromProjectJSON(projectsJSON[i]));
        }
    }
    
    render() {
        return <Container style={{
            paddingTop: '3.25em'    // account for nav
        }}>
            <h1 className="title is-size-1 has-text-centered is-unselectable" style={{
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

    _makeCardFromProjectJSON(project) {
        const skills = project.skills.map(skill => <Tag size="medium" style={{
            marginRight: '1em',
            marginBottom: '1em'
        }}>
            {skill}
        </Tag>); 
        
        return <a href={project.repository}><Card style={{
            minHeight: '30em',
            maxHeight: '30em',
            marginTop: '1em'
        }}>
            <Card.Image src={project.image}></Card.Image>
            <Card.Header>
                <Card.Header.Title className="is-size-5">{project.name}</Card.Header.Title>
            </Card.Header>
            <Card.Content>
                {project.description}
                <br /><br />
                {skills}
            </Card.Content>
        </Card></a>;
    }

}