import {Form, Button} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useHistory} from 'react-router-dom';
import React, { useState } from "react";
import store from "./data";

function Add () {
    const history = useHistory();
    const [businessName, setBusiness] = useState('');
    const [image, setImage] = useState('');
    const [address, setAddress] = useState('');

    let onBusinessChange = (event) => {
        setBusiness(event.target.value)
    }
    let onAddressChange = (event) => {
        setAddress(event.target.value)
    }
    let onImageChange = (event) => {
        setImage(event.target.value)
    }
    function handleAdd() {
        store.push({id: store.length, businessName, image, address});
        history.push('/');
    }
    return (
        <Row>
            <Col>
                <Form onSubmit={handleAdd}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Input Business Information Here</Form.Label>
                        <Form.Control type="input" id="businessName" placeholder="Business Name" onChange={onBusinessChange} />
                        <Form.Control type="input" id="address"placeholder="Business Address" onChange={onAddressChange} />
                        <Form.Control type="input" id="image" placeholder="Business Image Address" onChange={onImageChange} />
                    </Form.Group>
                    <Button class="btn btn-success" type="submit">Submit</Button>
                </Form>
            </Col>
        </Row>
    );
}

export default Add;