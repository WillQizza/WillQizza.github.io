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
        const endDate = this.props.to.year && this.props.to.month ? `${this.props.to.month} ${this.props.to.year}` : "Present";
        return <div className="experience">
            <h3>{ this.props.company }</h3>
            <i>{ this.props.title }</i><br />
            <span>
                { this.props.from.month } { this.props.from.year } - { endDate }
            </span>
            <ul>
                { this.props.responsibilities.map(responsibility => <li>{ responsibility }</li>) }
            </ul>
        </div>;
    }

}