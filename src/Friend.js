import React from 'react';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export default function Friend(props){
    return(
        <div className="dib br3 pa3 ma2 grow">
            <Card bg='info' text='white' border="dark" style={{ width: '18rem' } } >
            <Card.Img variant="bottom" height='200px' src={`https://robohash.org/${props.id}?size=200x200`}/>
            <Card.Body>
            <div className="text-center h2"><Card.Title >{props.name}</Card.Title></div>
            <Card.Text className="text-center">{props.info}</Card.Text >
            <div className="text-center"><Button variant="light" >View Profile</Button> </div>
            </Card.Body>
            </Card>
            </div>    
        );
    }

