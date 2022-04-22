import {Container, Row, Col, Button } from 'react-bootstrap';
import MenubarAdmin from '../components/menubarAdmin';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { API } from '../config/api';

const UpdateCategory = () => {
   
    const navigate = useNavigate();
    const {id} = useParams();
    const handleEdit = () => {
        navigate("/category");
    };

    const [category, setCategory] = useState({}); //Store product data
    const [form,setForm] = useState ({
        name:"",
    });

    const {name} = form;

    const getCategory = async(id) =>{
      try {
          const response = await API.get("/category/" + id);
          //store data product into form
          setForm({
            ...form,
            name: response.data.data.data.name,    
          });
          setCategory(response.data.data.data);
      } catch (error) {
          console.log(error);
      }
    };

    useEffect(()=>{
        getCategory(id);
    },[])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:(e.target.type==="file"? e.target.files : e.target.value),
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

            //inset product data into database
            const response = await API.patch("/category/"+ category.id,body,config);
            //back to product admin
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
                    <h2 className="font-title mt-3">Edit Category</h2>
                </Col>
                <Col xs="12">
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                        className="form-control my-4"
                        placeholder="Category Name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        />
                         <div className="d-grid gap-2">
                            <Button className="btn btn-success"
                            type="submit"
                            >
                                Save
                            </Button>
                        </div>
                    </form>
                </Col>

            </Row>
        </Container>
       
       
       
       
       
        </>
     );
}
 
export default UpdateCategory;