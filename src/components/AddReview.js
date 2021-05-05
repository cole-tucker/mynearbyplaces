import {Form, Button} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useHistory} from 'react-router-dom';
import React, { useState } from "react";
import business from "./data";
import api from "../communication/api"

function AddReview () {
    const history = useHistory();
    const [businessName, setBusiness] = useState('');
    const [review, setReview] = useState('');
    const [wholeBusiness] = useState('');
    const [rating, setRating] = useState('');
    const [message, setMessage] = useState('');
    
    let onBusinessChange = (event) => {
        setBusiness(event.target.value)
    }
    let onWholeBusinessChange = (event) => {
        setWholeBusiness(event.target.value)
    }
    let onReviewChange = (event) => {
        setReview(event.target.value)
    }
    let onRatingChange = (event) => {
        setRating(event.target.value)
    }
    function handleAdd() {
        let newReview = {name: businessName, business: wholeBusiness, review : review, rating : rating}
        api.addReviews(newReview)
        .then(() => {
        setWholeBusiness('');
        setBusiness('');
        setReview('');
        setRating('');
        })
        .catch(e => {console.log(e); setMessage (`There was an error in adding the review for ${businessName}`);});
        console.log(message);
        history.push('/');
    }
    return (
        <Row>
            <Col>
                <Form onSubmit={handleAdd}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Review Information</Form.Label>
                        <Form.Control type="input" id="businessName" placeholder="Enter Your Name" onChange={onBusinessChange} />
                        <Form.Control type="input" id="store"placeholder="Enter The Business You're Reviewing." onChange={onWholeBusinessChange} />
                        <Form.Control type="input" id="review" placeholder="Your review" onChange={onReviewChange} />
                        <Form.Control type="input" id="rating" placeholder="Your rating out of 5" onChange={onRatingChange} />
                        <br></br>
                    </Form.Group>
                    <Button class="btn btn-success" type="submit">Submit</Button>
                </Form>
            </Col>
        </Row>
    );
}

export default AddReview;