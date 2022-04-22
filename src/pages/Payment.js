import { useNavigate } from "react-router-dom";
import { Card,Button,Form } from "react-bootstrap";
import Menubar from "../components/menubar";

const Payment = () => {

    const navigate = useNavigate();

    const goHome = ()=> navigate("/productAdmin");
    return ( 
        <>
        <header>
            <Menubar/>
        </header>
        <div className="container mt-5">
            <div className="row">
                <div className="col-8">
                    <Card
                    bg="dark"
                    >
                        <Card.Header>Item Order</Card.Header>

                        <div className="d-flex px-2">
                            <div style={{
                                width:100,
                                height:120,
                            }}>
                                <img src={require("../assets/Image-Not-Available.png")} 
                                className = "img-fluid"
                                style={{
                                    width:"100%",
                                    height:"100%",
                                    objectFit: "cover",
                                }} />
                            </div>
                            <div className="ms-3">
                                <p>Mouse</p>
                                <p>Rp. 500.000</p>
                            </div>
                        </div>
                        <Card.Body>
                                <Card.Title>Address</Card.Title>
                                <p>Jakarta, Kebonjeruk</p>
                                <p>Choose Shipping Method</p>
                                <Form.Select size="sm">
                                    <option>JNE</option>
                                    <option>TIKI</option>
                                    <option>J&T</option>
                                </Form.Select>
                        </Card.Body>    
                        <Card.Body>
                                <Card.Title>Payment Method</Card.Title>
                                <Form.Select size="sm">
                                    <option>Bank Transfer</option>
                                    <option>Credit Card</option>
                                    <option>Virtual Account</option>
                                </Form.Select>
                        </Card.Body>    
        
                    </Card>
                </div>
                <div className="col-4">
                    <Card
                    bg="dark"
                    >
                        <Card.Header>Order Summary</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <p>Price &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;Rp.500.000</p>
                                <p>Item &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  1 pcs</p>
                                <p>Total Price &emsp; &emsp; &emsp; &emsp;Rp.500.000</p>
                            </Card.Text>
                            <div className="d-grid gap-2 mt-5">
                            <Button className="btn btn-success"
                            onClick={goHome}
                            >Pay</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>
        </>
     );
}
 
export default Payment;