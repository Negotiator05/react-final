//view of detail page for the individual item
 
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

function Detail() {
  const { id } = useParams(); // get the item ID from the URL
  const [item, setItem] = useState(null); // initialize the item state variable to null

  useEffect(() => {
	async function fetchItem() {
  	const response = await fetch(`http://localhost:5000/items/${id}`);
  	const data = await response.json();
  	setItem(data);
	}
	fetchItem();
  }, [id]); // fetch the item data whenever the ID changes

  if (!item) {
	return <p>Loading...</p>; // show a loading message while the data is being fetched
  }

  return (
	<div>
  	<h1 className="shop">
    	<img src="/images/logo-color.png" alt="none" id="about-logo" />
    	Climbing Inventory
  	</h1>
  	<Container>
    	<Card>
      	<Card.Img src={item.imageUrl} />
      	<Card.Body>
        	<Card.Title>{item.name}</Card.Title>
        	<Card.Text>{item.description}</Card.Text>
        	<Card.Text>{formatCurrency(item.price)}</Card.Text>
      	</Card.Body>
    	</Card>
  	</Container>
	</div>
  );
}
export default Detail;