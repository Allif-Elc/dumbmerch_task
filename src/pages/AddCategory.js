import {Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import MenubarAdmin from '../components/menubarAdmin';
import { useState } from 'react';

import { API } from '../config/api';

const AddCategory = () => {

    const navigate = useNavigate();

    const [form,setForm] = useState ({
        name:"",
    });

    const {name} = form;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:
                e.target.type==="file"? e.target.files : e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            //set headers content-type
            const config = {
                headers : {
                    "Content-type": "application/json",
                },
            };
            //req body store as object
            let body = JSON.stringify(form);

            //inset category data into database
            const response = await API.post("/category",body,config);
            //back to category admin
            navigate("/category");
        } catch (error) {
            console.log(error)
        };
    };

    return ( 
        <>
        <header>
            <MenubarAdmin/>
        </header>
        <Container>
            <Row>
                <Col xs="12">
                    <h2 className="font-title mt-3">New Category</h2>
                </Col>
                <Col xs="12">
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                        className="form-control my-4"
                        placeholder="Category Name"
                        name="name"
                        onChange={handleChange}
                        />
                         <div className="d-grid gap-2">
                            <Button className="btn btn-success"
                            type = "submit"
                            >
                                Add Category
                            </Button>
                        </div>
                    </form>
                </Col>

            </Row>
        </Container>
        </>

     );
}
 
export default AddCategory;