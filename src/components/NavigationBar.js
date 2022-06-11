import React, { Component } from "react";
import { Navbar } from "react-bulma-components";
import $ from 'jquery';

export default class NavigationBar extends Component {

    render() {
        return <Navbar style={{
            justifyContent: 'center',
            width: '100%',
            position: 'fixed',
            minHeight: '3.25em',
            maxHeight: '3.25em',
            borderBottom: '1px solid rgb(10 10 10 / 10%)' 
        }} id="navbar">
            <Navbar.Brand>
                <Navbar.Item onClick={this._gotoProjects}>
                    Projects
                </Navbar.Item>
                <Navbar.Item style={{
                    fontSize: '2em'
                }} onClick={this._gotoContact}>
                    William Qi
                </Navbar.Item>
                <Navbar.Item onClick={this._gotoContact}>
                    Contact
                </Navbar.Item>
            </Navbar.Brand>
        </Navbar>;
    }

    _gotoProjects() {
        $([document.documentElement]).animate({
            scrollTop: $('#projectsTitle').offset().top - 100
        }, 1000);
    }

    _gotoContact() {
        $([document.documentElement]).animate({
            scrollTop: $('body').offset().top - 100
        }, 1000);
    }

}