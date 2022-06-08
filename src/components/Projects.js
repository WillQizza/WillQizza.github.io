import { Component } from "react";
import { Columns, Container } from "react-bulma-components";
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
        return <Container>
            <Columns>
                <Columns.Column size="one-quarter">
                    {this.projects[0]}
                </Columns.Column>
                <Columns.Column size="one-quarter">
                    {this.projects[1]}
                </Columns.Column>
                <Columns.Column size="one-quarter">
                    {this.projects[2]}
                </Columns.Column>
                <Columns.Column size="one-quarter">
                    {this.projects[3]}
                </Columns.Column>
            </Columns>
        </Container>;
    }

    _makeCardFromProjectJSON(project) {
        
    }

}