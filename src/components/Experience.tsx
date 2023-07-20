import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

type ExperienceProperties = {
    company: string;
    title: string;
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
            <div className="experience-timeline">
                <div className="experience-timeline-icon">
                    <FontAwesomeIcon style={{ paddingTop: "9px" }} icon={faLocationDot} />
                </div>
                <div className="experience-timeline-line"></div>
            </div>
            <div className="experience-info">
                <h3>{ this.props.company }</h3>
                <i>{ this.props.title }</i><br />
                <span>
                    { this.props.from.month } { this.props.from.year } - { endDate }
                </span>
                <ul>
                    { this.props.responsibilities.map(responsibility => <li key={responsibility}>{ responsibility }</li>) }
                </ul>
            </div>
            <div className="experience-clear"></div>
        </div>;
    }

}