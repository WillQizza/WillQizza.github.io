import { Component } from "react";

type ProjectProperties = {
    name: string;
    description: string;
    repository: string;
    skills: string[];
};

export default class Project extends Component<ProjectProperties> {

    render() {
        return <div>
            { this.props.name }
        </div>;
    }

}