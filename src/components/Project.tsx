import { Component } from "react";

type ProjectProperties = {
    name: string;
    description: string;
    repository: string;
    skills: string[];
};

export default class Project extends Component<ProjectProperties> {

    render() {
        const skills = this.props.skills.map(skill => <li key={skill} className="skill">{skill}</li>);

        return <div className="project">
            <h3 className="title"><a className="repository" href={ this.props.repository }>{ this.props.name }</a></h3>
            { this.props.description }
            <br /><br />
            <ul className="skills">
                { skills }
            </ul>
        </div>;
    }

}