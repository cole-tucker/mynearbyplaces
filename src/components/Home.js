import {Card, CardGroup} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import api from "../communication/api";

function Home() {
    const [places, setPlaces] = useState([]);
    // function deleteBusiness(id) {
    //     let place = {id : location.state.id}
    //     console.log(place.id)
    //     api.deletePlace(place)
    //     .then(() => {console.log(`The place ${place.id} was added successfully`);
    //     })
    //     .catch(e => {console.log(e); setMessage (`There was an error in adding the place ${place.id}`);});
    //     console.log(message);
    //     history.push('/');
    // }
    useEffect(() => {
        if (places.length === 0) {
          api.getPlaces()
          .then(x => setPlaces(x))
          .catch(e => console.log(e));
        }
    })
    const cardsArray = places.map(place => (
        <Card>
            <div class="text-center">{place.businessName}</div>
            <img class="card-img" src={place.image} alt="Restaurant" />
            <div class="text-center" > {place.address} </div>
            <Button>Delete</Button>
            <Link to = {{pathname: '/edit', state: {id: place.id}}}>
                <Button>Edit</Button>
            </Link>
        </Card>
    ));


    return (
        <div>
        <CardGroup>{cardsArray}</CardGroup>
        </div>
    )
};
export default Home;