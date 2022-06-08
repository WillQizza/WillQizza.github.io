import React, { Component } from "react";
import { Columns, Hero, Image } from "react-bulma-components";

export default class AboutMe extends Component {
    
    render() {
        return <Hero color='info'>
            <Hero.Body>
                <Columns vCentered={true} centered={true}>
                    <Columns.Column size="two-fifths">
                        <p className="title">Fullstack Software Developer</p>
                    </Columns.Column>
                    <Columns.Column size="one-fifth">
                        <Image src="https://avatars.githubusercontent.com/u/20137336?v=4" size={128} rounded={true} />
                    </Columns.Column>
                    <Columns.Column size="two-fifths">
                        Contact details
                    </Columns.Column>
                </Columns>
            </Hero.Body>
        </Hero>;
    }

}