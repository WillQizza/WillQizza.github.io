import { Component } from "react";

import "./Contact.scss";

export default class Contact extends Component {

    render() {
        return <div id="contact-container">
            <h1>Contact</h1>
            <hr />
            <div id="contact-content">
                <div id="contact-avatar">
                    <img alt="William Qi" src="/avatar.jpeg" />
                </div>
                <p>Hello there! I'm William, a passionate third-year Computing Science student at the University of Alberta. Since the age of 9, I've been captivated by programming, and my love for coding has only grown stronger over the years.</p>
                <p>Whether it's building applications that enhance user experiences, developing software to address real-world problems, or creating innovative solutions to make everyday tasks more efficient, I find the process of coding and its potential to create meaningful change thrilling!</p>
                <p>Although, when I'm not immersed in coding, you'll likely find me indulging in papercraft, getting lost in a good book, cosplaying as some of my favorite characters, or just exploring the vast world wide web.</p>
                <p>Let's connect and create a better tomorrow together!</p>
            </div>
        </div>
    }

}