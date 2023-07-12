import { Component } from "react";
import "./Landing.scss";

export default class Landing extends Component {

    render() {
        return <div id="root">
            <svg className="ground" xmlns="http://www.w3.org/2000/svg" viewBox="0 30 1440 320">
                <path fill="#00bb00" fill-opacity="1" d="M0,160L80,160C160,160,320,160,480,170.7C640,181,800,203,960,213.3C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
            <svg className="ground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#9b7653" fill-opacity="1" d="M0,160L80,160C160,160,320,160,480,170.7C640,181,800,203,960,213.3C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
        </div>
    }

}