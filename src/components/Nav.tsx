import { Component, MouseEvent, RefObject } from "react";
import "./Nav.scss";

type NavigationBarProperties = {
    waypoints: NavigationWaypoints;
};

type NavigationWaypoints = {
    landing: RefObject<HTMLDivElement>;
    projects: RefObject<HTMLDivElement>;
    experiences: RefObject<HTMLDivElement>;
    contact: RefObject<HTMLDivElement>;
};

export default class NavigationBar extends Component<NavigationBarProperties> {

    render() {
        return <div id="nav">
            <ul>
                <li><a href="/resume.pdf" target="_blank">Resume</a></li>
                <li><a href="#contact" onClick={event => this.toWaypoint(event, "contact")}>Contact</a></li>
                <li><a href="#experience" onClick={event => this.toWaypoint(event, "experiences")}>Experience</a></li>
                <li><a href="#projects" onClick={event => this.toWaypoint(event, "projects")}>Projects</a></li>
                <li><a href="#home" onClick={event => this.toWaypoint(event, "landing")}>Home</a></li>
            </ul>
        </div>
    }

    toWaypoint<K extends keyof NavigationWaypoints>(event: MouseEvent<HTMLAnchorElement>, waypointId: K) {
        event.preventDefault();

        const waypoint = this.props.waypoints[waypointId];
        waypoint.current!.scrollIntoView({
            behavior: "smooth"
        });
    }

}