import { Component } from "react";
import { Card, Tag } from "react-bulma-components";

export default class Project extends Component {

    render() {
        const skills = this.props.skills.map(skill => <Tag size="medium" style={{
            marginRight: '1em',
            marginBottom: '1em'
        }}>
            {skill}
        </Tag>); 
        
        return <a href={this.props.repository}><Card style={{
            minHeight: '30em',
            maxHeight: '30em',
            marginTop: '1em'
        }}>
            <Card.Image src={this.props.image}></Card.Image>
            <Card.Header>
                <Card.Header.Title className="is-size-5">{this.props.title}</Card.Header.Title>
            </Card.Header>
            <Card.Content>
                {this.props.description}
                <br /><br />
                {skills}
            </Card.Content>
        </Card></a>;
    }

}