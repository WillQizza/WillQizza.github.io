import { Component } from "react";
import { InView } from "react-intersection-observer";

type ProjectProperties = {
    name: string;
    description: string;
    repository?: string;
    skills: string[];
};

export default class Project extends Component<ProjectProperties> {

    render() {
        const skills = this.props.skills.map(skill => <li key={skill} className="skill">{skill}</li>);

        return <InView triggerOnce={true}>
            {({ inView, ref }) => (
                <div ref={ref} className={inView ? "project visible" : "project"}>
                    <h3 className="title">
                        {
                            this.props.repository 
                            ? <a className="repository" href={ this.props.repository } target="_blank" rel="noreferrer">{ this.props.name }</a>
                            : `${this.props.name} (Closed Source)`
                        }
                    </h3>
                    { this.props.description }
                    <br /><br />
                    <ul className="skills">
                        { skills }
                    </ul>
                </div>  
            )}
        </InView>;
    }

}