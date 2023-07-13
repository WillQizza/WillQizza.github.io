import { Component } from "react";
import "./Nav.scss";

export default class NavigationBar extends Component {

    render() {
        return <div id="nav">
            <ul>
                <li><a href="/resume.pdf" target="_blank">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#home">Home</a></li>
            </ul>
        </div>
    }

}