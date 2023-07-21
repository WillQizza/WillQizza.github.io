import { Component } from "react";
import "./Experiences.scss";

import experiences from "../data/experience.json";
import Experience from "./Experience";
import { SectionProperties } from "./utils";

export default class Experiences extends Component<SectionProperties> {

    render() {
        return <div id="experiences-container" ref={this.props.waypoint}>
            <h1>Experience</h1>
            <hr />
            <div id="experiences">
                { experiences.map(json => <Experience   key={json.id}
                                                        company={json.company} 
                                                        title={json.title} 
                                                        responsibilities={json.responsibilities} 
                                                        location={json.location}
                                                        to={json.to} 
                                                        from={json.from} />) }
            </div>
        </div>
    }

}