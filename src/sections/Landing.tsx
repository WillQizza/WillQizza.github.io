import { Component, UIEvent } from "react";
import "./Landing.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default class Landing extends Component {

    render() {
        return <div id="landing-container">
            <div id="landing-info">
                <h1>Hey, I'm William!</h1>
                <h2>Student Software Developer</h2>
                <div id="landing-tagline-container">
                    <p>I develop full-stack applications and I love it.</p>
                </div>
            </div>

            <div id="landing-scroll-down-hint-container">
                <div>
                    View my Projects<br />
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>
        </div>
    }

}