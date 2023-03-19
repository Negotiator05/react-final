 
import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../Components/StoreItem";
import storeItems from "../Data/Items.json";


function Products() {
    return ( 
    <>
        <h1 className="shop">
        <img src="/images/logo-color.png" alt="none" id='about-logo'/>Climbing Shop</h1>
        <Row  md={1} xs={1} lg={3} className="g-3">
            {storeItems.map(item =>(
                <Col key={item.id}><StoreItem {...item} /></Col>
            ))}
        </Row>
    
    </>
    );
}

export default Products;