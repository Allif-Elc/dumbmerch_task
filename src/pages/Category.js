import {Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';

import MenubarAdmin from '../components/menubarAdmin';
import Deletebox from '../components/modal/deleteBox';
import { API } from "../config/api";


const Category = () => {
    const navigate = useNavigate();
    
     //variable store data product
    const [categories, setCategories] = useState([]);

    //Get data category from database
    const getCategories = async () => {
        try {
        //fetching data using rest api
        const response = await API.get("/categories");
        //store data to variable
        setCategories(response.data.data);
        } catch (error) {
        console.log(error);
        };
    };

    useEffect(() => {
        getCategories();
    }, []);

    const [show, setShow] = useState(false);
    const [idDelete, setIdDelete] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAdd = () =>{
        navigate("/addcategory")
    };

    const handleEdit = (id) =>{
        navigate("/updatecategory/"+id)
    };

    const handleDelete = (id) => {
        setIdDelete(id);
        handleShow();
    };
    
    // Create function for handle delete product here ...
    // If confirm is true, execute delete data
    const deleteById = async (id) => {
        try {
          await API.delete(`/category/${id}`);
          getCategories();
        } catch (error) {
          console.log(error);
        }
    };
    
    useEffect(() => {
        if (confirmDelete) {
          // Close modal confirm delete data
          handleClose();
          // execute delete data by id function
          deleteById(idDelete);
          setConfirmDelete(null);
        }
    }, [confirmDelete]);
    
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
                    {categories.length != 0 ? (
                    <Table striped hover size="lg" variant="dark">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Category Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {categories?.map((item,index)=>(
                            <tr key={index}>
                            <td width="10%" className="align-middle">
                               {index + 1}
                            </td>
                            <td width="60%" className="align-middle">
                                {item.name}
                            </td>
                            <td width="30%">
                                <Button
                                className="btn-sm btn-success me-2"
                                style={{ width: "135px" }}
                                onClick={()=>{handleEdit(item.id)}}
                                >
                                Edit
                                </Button>
                                <Button
                                className="btn-sm btn-danger"
                                style={{ width: "135px" }}
                                onClick={()=>{handleDelete(item.id)}}                                
                                >
                                Delete
                                </Button>
                            </td>
                        </tr>
                        ))}
                        </tbody>
                    </Table>
                    ):(
                        <div className="text-center pt-5">
                            <div className="mt-3">No data product</div>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
        <Deletebox show={show} 
            handleClose={handleClose} 
            setConfirmDelete={setConfirmDelete}
        />
    </>

     );
}
 
export default Category;