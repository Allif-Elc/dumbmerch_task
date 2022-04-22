import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import MenubarAdmin from "../components/menubarAdmin";
import Deletebox from "../components/modal/deleteBox";
import { API } from "../config/api";

const ListProduct = () => {
  const navigate = useNavigate();

  //variable store data product
  const [products, setProducts] = useState([]);

  //Get data product from database
  const getProducts = async () => {
    try {
      //fetching data using rest api
      const response = await API.get("/products");
      //store data to variable
      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const [show, setShow] = useState(false);
  const [idDelete, setIdDelete] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd = () => {
    navigate("/addproduct");
  };

  const handleEdit = (id) => {
    navigate(`/updateproduct/${id}` );
  };

  const handleDelete = (id) => {
    setIdDelete(id);
    handleShow();
  };

  // Create function for handle delete product here ...
  // If confirm is true, execute delete data
  const deleteById = async (id) => {
    try {
      await API.delete("/product/"+id);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

   useEffect(() => {
     if (confirmDelete) {
        //Close modal confirm delete data
       handleClose();
        //execute delete data by id function
       deleteById(idDelete);
       setConfirmDelete(null);
     }
   }, [confirmDelete]);

  return (
    <>
      <header>
        <MenubarAdmin />
      </header>
      <Container>
        <Row className="my-5">
          <Col xs="8">
            <h2 className="font-title">List Product</h2>
          </Col>
          <Col xs="4" className="ps-5">
            <Button
              style={{
                width: 150,
              }}
              className="btn-success"
              onClick={handleAdd}
            >
              Add Product
            </Button>
          </Col>
          <Col xs="12" className="mt-3">
            {products ? (
              <>
               <Table striped hover size="lg" variant="dark">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Photo</th>
                    <th>Product Name</th>
                    <th>Product Desc</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {products?.map((item,index) => (
                  <tr key={index}>
                    <td className="align-middle">
                      {index+1}
                    </td>
                    <td className="align-middle">
                        <img
                          src={item.image}
                          style={{
                            width: '80px',
                            height: '80px',
                            objectFit: 'cover',
                          }}
                          alt="preview"
                        />
                    </td> 
                    <td className="align-middle">
                        {item.title}
                      </td>
                    <td className="align-middle">
                        {item.desc}
                    </td>
                    <td className="align-middle">
                        {item.price}
                    </td>
                    <td className="align-middle">
                        {item.qty}
                    </td>
                    <td className="align-middle">
                        <Button
                          className="btn-sm btn-success me-2"
                          style={{ width: "135px" }}
                          onClick={() => {
                            handleEdit(item.id);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          className="btn-sm btn-danger"
                          style={{ width: "135px" }}
                          onClick={() => {
                            handleDelete(item.id);
                          }}               
                        >
                          Delete
                        </Button>
                      </td>
                  </tr>
                ))} 
                </tbody>               
              </Table>
  
              </>
            ) : (
              <div className="text-center pt-5">
                <div className="mt-3">No data product</div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <Deletebox
        show={show}
        handleClose={handleClose}
        setConfirmDelete={setConfirmDelete}
      />
    </>
  );
};

export default ListProduct;
