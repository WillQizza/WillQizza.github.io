import { Component } from "react";
import { InView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { SectionProperties } from "./utils";

import "./Contact.scss";

export default class Contact extends Component<SectionProperties> {

    render() {
        return <div id="contact-container" ref={ this.props.waypoint }>
            <h1>Contact</h1>
            <hr />
            <InView>
                {({ inView, ref }) => (
                    <div id="contact-content" ref={ref} className={inView ? "visible" : ""}>
                        <div id="contact-avatar">
                            <img alt="William Qi | Software Developer" src="https://avatars.githubusercontent.com/u/20137336" width="192" height="192" />
                        </div>
                        <p>Hello there! I'm William, a passionate third-year Computing Science student at the University of Alberta. Since the age of 9, I've been captivated by programming, and my love for coding has only grown stronger over the years.</p>
                        <p>Whether it's building applications that enhance user experiences, developing software to address real-world problems, or creating innovative solutions to make everyday tasks more efficient, I find the process of coding and its potential to create meaningful change thrilling!</p>
                        <p>Although, when I'm not immersed in coding, you'll likely find me indulging in papercraft, getting lost in a good book, cosplaying as some of my favorite characters, or just exploring the vast world wide web.</p>
                        <p>Let's connect and create a better tomorrow together!</p>
                        <div id="contact-socials">
                            <a href="mailto:williamqi.250@gmail.com"><FontAwesomeIcon className="contact-social" icon={faEnvelope} /></a> 
                            <a href="https://github.com/willqizza/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="contact-social" icon={faGithub} /> </a>
                            <a href="https://www.linkedin.com/in/william-qi/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="contact-social" icon={faLinkedin} /></a>
                        </div>
                    </div>
                )}
            </InView>
        </div>
    }

}