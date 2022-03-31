import {Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import MenubarAdmin from '../components/menubarAdmin';
import Deletebox from '../components/modal/deleteBox';


const Category = () => {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false)};
    const handleShow = () => {setShow(true)};

    const handleAdd = () =>{
        navigate("/addcategory")
    };

    const handleEdit = () =>{
        navigate("/updatecategory")
    };
    return ( 
    <>
        <header>
            <MenubarAdmin/>
        </header>
        <Container>
            <Row className="my-5">
                <Col xs="8">
                    <h2 className="font-title">List Category</h2>
                </Col>
                <Col xs="4" className="ps-5">
                    <Button
                    style={{
                        width:150,
                    }}
                    className="btn-success"
                    onClick={handleAdd}
                    >
                        Add Category
                    </Button>
                </Col>
                <Col xs="12" className="mt-3">
                    <Table striped hover size="lg" variant="dark">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Category Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td width="10%" className="align-middle">
                                    1
                                </td>
                                <td width="60%" className="align-middle">
                                    Pheriperals
                                </td>
                                <td width="30%">
                                    <Button
                                    className="btn-sm btn-success me-2"
                                    style={{ width: "135px" }}
                                    onClick={handleEdit}
                                    >
                                    Edit
                                    </Button>
                                    <Button
                                    className="btn-sm btn-danger"
                                    style={{ width: "135px" }}
                                    onClick={handleShow}                                
                                    >
                                    Delete
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td width="10%" className="align-middle">
                                    2
                                </td>
                                <td width="60%" className="align-middle">
                                    Computer
                                </td>
                                <td width="30%">
                                    <Button
                                    className="btn-sm btn-success me-2"
                                    style={{ width: "135px" }}
                                    >
                                    Edit
                                    </Button>
                                    <Button
                                    className="btn-sm btn-danger"
                                    style={{ width: "135px" }}
                                    >
                                    Delete
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
        <Deletebox show={show} close={handleClose}/>

    </>

     );
}
 
export default Category;