import { Component } from "react";
import { InView } from "react-intersection-observer";
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
        return <InView triggerOnce={true}>
            {({ inView, ref }) => (
                <div ref={ref} className={inView ? "experience visible" : "experience"}>
                    <div className="experience-timeline">
                        <div className="experience-timeline-icon">
                            <FontAwesomeIcon style={{ paddingTop: "9px" }} icon={faLocationDot} />
                        </div>
                        <div className="experience-timeline-line"></div>
                    </div>
                    <div className="experience-info">
                        <h2 className="experience-company">{ this.props.company }</h2>
                        <i className="experience-title">{ this.props.title }</i><br />
                        <span className="experience-duration">
                            { this.props.from.month } { this.props.from.year } - { endDate }
                        </span>
                        <ul className="experience-responsibilities">
                            { this.props.responsibilities.map(responsibility => <li className="experience-responsibility" key={responsibility}>{ responsibility }</li>) }
                        </ul>
                    </div>
                    <div className="experience-clear"></div>
                </div>
            )}
        </InView>;
    }

}