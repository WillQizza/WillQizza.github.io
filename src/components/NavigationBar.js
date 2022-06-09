import React, { Component } from "react";
import { Navbar } from "react-bulma-components";

export default class NavigationBar extends Component {

    render() {
        return <Navbar style={{
            justifyContent: 'center',
            width: '100%',
            position: 'fixed',
            minHeight: '3.25em',
            maxHeight: '3.25em'
        }}>
            <Navbar.Brand>
                <Navbar.Item>
                    Projects
                </Navbar.Item>
                <Navbar.Item style={{
                    fontSize: '2em'
                }}>
                    William Qi
                </Navbar.Item>
                <Navbar.Item>
                    Contact
                </Navbar.Item>
            </Navbar.Brand>
        </Navbar>;
    }

}