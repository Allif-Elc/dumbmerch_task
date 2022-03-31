import { Card } from "react-bootstrap";
import Menubar from "../components/menubar";

const Payment = () => {
    return ( 
        <>
        <header>
            <Menubar/>
        </header>
        <div className="container">
            <div className="row">
                <Card
                bg="dark"
                >
                    Test
                </Card>
            </div>

        </div>
        </>
     );
}
 
export default Payment;