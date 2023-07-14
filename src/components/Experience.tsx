import { Component } from "react";

type ExperienceProperties = {
    company: string;
    title: string;
    image: string | null;
    responsibilities: string[];
    location: string;
    from: {
        month: string;
        year: number;
    };
    to: {
        month: string | null;
        year: number | null;
    };
};

export default class Experience extends Component<ExperienceProperties> {

    render() {
        return <div className="experience">
            <h3>{ this.props.company } | { this.props.location }</h3>
            <i>{ this.props.title }</i><br /><br />
            <ul>
                { this.props.responsibilities.map(responsibility => <li>{ responsibility }</li>) }
            </ul>
        </div>;
    }

}