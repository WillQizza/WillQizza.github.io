import { Component } from "react";
import "./Landing.scss";

export default class Landing extends Component {

    render() {
        return <div id="landing-container">
            <div id="landing-info">
                <h1>Hey, I'm William!</h1>
                <h2>Student Software Developer</h2>
                <div id="landing-tagline-container">
                    <p>I develop full-stack applications, and I love it.</p>
                </div>
            </div>
        </div>
    }

}