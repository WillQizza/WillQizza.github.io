import { Component } from "react";
import { Container } from "react-bulma-components";

export default class AboutMe extends Component {

    render() {
        return <Container className="has-text-centered">
            <h1 className="title is-size-2 is-unselectable" style={{
                paddingTop: '0.5em'
            }}>About Me</h1>
            <p className="is-size-5">
                Hi there, my name is William!<br />
                I'm currently a second year Specialization Computing Science student over at the University of Alberta in Edmonton, AB!<br />
                I love to work on all sorts of projects in my free-time, not only because I love seeing my projects come to life and better the lives<br />
                of others, but also to challenge myself and go beyond my limits to further improve myself as a software developer.  
            </p>
            <p className="is-size-5"><a href="/resume.pdf">You can view my resume here!</a></p>
        </Container>;
    }

}