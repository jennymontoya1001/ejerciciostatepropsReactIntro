import React, { Component } from 'react'
import {Card} from 'react-bootstrap';

export default class Cards extends Component {

    render() {
        const { superhero, publisher, image } = this.props.heroes;
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} width="100"/>
                    <Card.Body>
                        <Card.Title>{superhero}</Card.Title>
                        <Card.Text>
                           {publisher}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
