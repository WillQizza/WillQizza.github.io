import { Component } from "react";
import "./Experiences.scss";

import experiences from "../data/experience.json";
import Experience from "./Experience";

export default class Experiences extends Component {

    render() {
        
        return <div id="experiences-container">
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