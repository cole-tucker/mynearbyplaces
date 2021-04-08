import {Card, CardDeck} from "react-bootstrap";
import reviews from './reviews'
function Review () {
    const cardsArray = reviews.map(reviews => (
      <Card>
        <div class="text-center">{reviews.store}</div>
        <div class="text-center">{reviews.businessName}</div>
        <div class="text-center">"{reviews.review}"</div>
        <div class="text-center">{reviews.rating}/5</div>
      </Card>
      )
    );
   return (
     <div>
       <CardDeck>
       {cardsArray}
       </CardDeck>
     </div>
   )
  };
  export default Review;