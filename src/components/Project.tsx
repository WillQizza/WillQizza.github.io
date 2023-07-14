import { Component } from "react";

type ProjectProperties = {
    name: string;
    description: string;
    repository: string;
    skills: string[];
};

export default class Project extends Component<ProjectProperties> {

    render() {
        const skills = this.props.skills.map(skill => <div>{skill}</div>);

        return <div className="project">
            <h3 className="title">{ this.props.name } - <a className="repository" href={ this.props.repository }>View Repository</a></h3>
            { this.props.description }
            <br /><br />
            { skills }
        </div>;
    }

}