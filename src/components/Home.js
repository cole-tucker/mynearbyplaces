import {
    Card,
    CardGroup
} from "react-bootstrap";
import {
    Button
} from "react-bootstrap";
import {
    Link
} from "react-router-dom";
import {useHistory} from 'react-router-dom';
import store from './data'

function Home() {
    const history = useHistory();
    function deleteBusiness(id) {
        delete store[id];
        history.push('/');
    }
    const cardsArray = store.map(store => (
        <Card>
            <div class = "text-center">{store.businessName}</div>
            <img class="card-img" src={store.image} alt="Restaurant Image" />
            <div class="text-center" > {store.address} </div>
            <Button onClick={{deleteBusiness}}>Delete</Button>
            <Link to = {{pathname: '/edit', state: {id: store.id}}}>
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