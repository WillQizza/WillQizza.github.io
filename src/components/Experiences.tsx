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
                { experiences.map(json => <Experience company={json.company} 
                                                        title={json.title} 
                                                        image={json.image} 
                                                        responsibilities={json.responsibilities} 
                                                        location={json.location}
                                                        to={json.to} 
                                                        from={json.from} />) }
            </div>
        </div>
    }

}