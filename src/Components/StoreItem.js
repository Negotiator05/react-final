import { Card, Container } from "react-bootstrap"
import React from "react"
import { formatCurrency } from "../utilities/formatCurrency"
import { Button } from "react-bootstrap"
import { useShoppingCart, ShoppingCartProvider} from "../Conxtext/ShoppingCartContext"
import  Detail  from "../Pages/Detail"
import { Link } from "react-router-dom"


export function StoreItem({id, name, price, imgUrl}){
   
    const  { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quanity = 0


    function viewDetailsPage(item){
        const {id}  = item.id;
        

    }

    return(
        <Container>
            <Card style={{ width: '18rem' }} className="h-100">
                <Card.Img
                variant="top"
                src= {imgUrl}
                height="200px"
                style={{objectFit:"cover"}}/>
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="d-flex justify-content-space-between align-items-baseline">
                        <span className="fs-5">{name}</span>
                        <span className="ms-2 text-muted">{formatCurrency(price)}</span>

                    </Card.Title>
                    <div className="mt-auto">
                    <div>
                    <Link to= {`/detail/${id}`} >
                    <Button onClick= {()=>Detail(id)} variant="warning">View Details</Button>
                    </Link>
                    </div>
                        {quanity === 0 ? (<Button className="w-100">+ Add to Cart</Button>) :
                        <div className="d-flex align-items-center flex" style={{gap: ".5rem"}}>
                        <div className="d-flex align-items-center flex" style={{gap: ".5rem"}}>
                        <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                            <div>
                                <span className="fs-7">{quanity}</span> in cart
                            </div>
                            <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                           </div>
                           <Button onClick={() => removeFromCart(id
                            )} variant="danger" size="sm">Remove</Button>
                            </div>}
                            
                    </div>
                </Card.Body> 

            </Card>
        </Container>

    )

}