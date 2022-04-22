import { Col, Row, Container, Button } from 'react-bootstrap';
import { useState } from 'react';
import '../index.css'

import Login from '../components/auth/login';
import Register from '../components/auth/register';

const Landing = () => {

    const [isRegister, setIsRegister] = useState(false);

    const switchLogin = () =>{
        setIsRegister(false);
    }

    const switchRegister = () =>{
        setIsRegister(true);
    }
    return ( 
        <Container>
            <Row className="my-5">
            <Col className="mt-5">
                <img src={require('../assets/logo-dumbmerch.png')}
                className="landing-logo mb-3" 
                alt="Logo-landing"/>
                <h4 className="landing-title mb-2">Easy, Fast and Reliable</h4>
                <p className="landing-info mb-5" >Go shopping for merchandise, just go to dumb merch <br/>
                    shopping. the biggest merchandise in <b>Indonesia</b>
                </p>
                <Button
                onClick={switchLogin} 
                className="landing-button px-5 my-5">
                    Login
                </Button>
                <Button
                variant="text"
                onClick={switchRegister}
                style={{color:"white"}} 
                className="px-5 my-5 ms-5">
                    Register
                </Button>

            </Col>
            <Col className="mt-5">
                {isRegister? <Register/> : <Login/>}
            </Col>
            </Row>
        </Container>
     );
}
 
export default Landing;