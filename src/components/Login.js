import {Form, Button} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useHistory} from 'react-router-dom';
import React, { useState } from "react";

function Login (props) {
    const history = useHistory();
    const [email, setEmail] = useState('');

    let onLoginSubmitted = () => {
        history.push('/');
        props.onLoggedIn(email)
    }

    let onEmailChange = (event) => {
        setEmail(event.target.value)
    }
    return (
        <Row><Col>
        <Form onSubmit={onLoginSubmitted}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={onEmailChange} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button class="btn btn-success" type="submit">
                Submit
                </Button>
        </Form>
        </Col></Row>
    );
}

export default Login;