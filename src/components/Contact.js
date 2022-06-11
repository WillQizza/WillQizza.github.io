import React, { Component } from "react";
import { Image } from "react-bulma-components";

export default class Contact extends Component {
    
    render() {
        return <div className="is-flex is-justify-content-center">
            <a href="https://www.linkedin.com/in/william-qi/" rel="noreferrer" target="_blank"><Image className="mr-5" src="./imgs/socials/linkedin.png" size={32} /></a>
            <a href="https://github.com/WillQizza" rel="noreferrer" target="_blank"><Image className="mr-5 pt-1" src="./imgs/socials/github.png" size={32} /></a>
            <a href="mailto:williamqi.250@gmail.com"><Image className="pt-1" src="./imgs/socials/email.png" size={32} /></a>
        </div>;
    }

}