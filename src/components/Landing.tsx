import { Component, MouseEvent, RefObject } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import "./Landing.scss";
import { SectionProperties } from "./utils";

type LandingProperties = SectionProperties & {
    projectsWaypoint: RefObject<HTMLDivElement>;
};

export default class Landing extends Component<LandingProperties> {

    render() {
        return <div id="landing-container" ref={this.props.waypoint}>
            <div id="landing-info">
                <h1>Hey, I'm William</h1>
                <h2>Student Software Developer</h2>
                <div id="landing-tagline-container">
                    <p>Software developer creating streamlined solutions</p>
                </div>
            </div>

            <div id="landing-scroll-down-hint-container">
                <a href="#projects" onClick={event => this.gotoProjects(event)}>
                    <div>
                        View my Projects<br />
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                </a>
            </div>
        </div>
    }

    gotoProjects(event: MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();

        this.props.projectsWaypoint.current!.scrollIntoView({
            behavior: "smooth"
        });
    }

}