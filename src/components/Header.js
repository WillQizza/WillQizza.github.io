import React, { Component } from "react";
import { Hero, Image } from "react-bulma-components";
import Contact from "./Contact";

export default class Header extends Component {
    
    render() {
        return <Hero color='info' style={{
            paddingTop: '3.25em'    // Account for nav fixed positioning!
        }}>
            <Hero.Body>
                <h1 className="title is-size-2 has-text-centered is-unselectable">Fullstack Software Developer</h1>
                <div className="is-flex is-justify-content-center">
                    <Image src="https://avatars.githubusercontent.com/u/20137336" size={128} rounded={true} />
                </div>
                <Contact />
            </Hero.Body>
        </Hero>;
    }

}