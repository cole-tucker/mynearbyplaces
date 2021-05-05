import {Form, Button} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useHistory} from 'react-router-dom';
import React, { useState } from "react";
import {useLocation} from "react-router-dom";
import api from "../communication/api"

function Edit () {
    const history = useHistory();
    let location = useLocation();
    const [businessName, setBusiness] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState('');
    const [message, setMessage] = useState('');
       
    let onBusinessChange = (event) => {
        setBusiness(event.target.value)
    }

    let onAddressChange = (event) => {
        setAddress(event.target.value)
    }

    let onImageChange = (event) => {
        setImage(event.target.value)
    }
    function handleEdit() {
        let place = {name: businessName, address: address, image: image, id: location.state.id}
        console.log(place.businessName);
        api.editPlace(place)
        .then(() => {console.log(`The place ${businessName} was added successfully`);
        setBusiness('');
        setAddress('');
        setImage('');
        })
        .catch(e => {console.log(e); setMessage (`There was an error in adding the place ${businessName}`);});
        console.log(message);
        history.push('/');
    }
    return (
        <Row>
            <Col>
                <Form onSubmit={handleEdit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Edit Business Information</Form.Label>
                        <Form.Control type="input" id="businessName" placeholder="Enter Name" onChange={onBusinessChange} />
                        <Form.Control type="input" id="address"placeholder="Enter Address" onChange={onAddressChange} />
                        <Form.Control type="input" id="image" placeholder="Enter image link" onChange={onImageChange} />
                        <br></br>
                    </Form.Group>
                    <Button class="btn btn-success" type="submit">Submit</Button>
                </Form>
            </Col>
        </Row>
    );
}

export default Edit;