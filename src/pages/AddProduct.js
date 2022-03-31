import { Container,Col, Row, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MenubarAdmin from '../components/menubarAdmin';

const AddProduct = () => {

    const [preview, setPreview] = useState(null); //For image preview
    
    const navigate = useNavigate();

    const handleAdd = () => {
        navigate("/productadmin");
    };

    const handleChange = (e) => {
            
        // Create image url for preview
        if (e.target.type === "file") {
          let url = URL.createObjectURL(e.target.files[0]);
          setPreview(url);
        }
      };

    return ( 
        <>
        <header>
            <MenubarAdmin/>
        </header>
        <Container>
            <Row>
                <Col xs="12">
                    <h2 className="font-title">New Product</h2>
                </Col>
                <Col xs="12">
                    <form>
                       {preview && (
                        <div>
                            <img
                            src={preview}
                            alt="imgpreview"
                            style={{
                                maxWidth: "150px",
                                maxHeight: "150px",
                                objectFit: "cover",
                            }}
                            />
                        </div>
                        )}
                        <input
                        type="file"
                        id="upload"    
                        name="image"
                        onChange={handleChange}
                        hidden
                        />
                        <label for="upload" className="btn btn-danger my-3">
                            Upload Images
                        </label>

                        <input type="text"
                        className="form-control mb-2"
                        placeholder="Product Name"
                        />
                        <textarea 
                        className="form-control mb-2"
                        placeholder="Product Desc"
                        style={{height:130}}
                        ></textarea>
                        <input type="number"
                        className="form-control mb-2"
                        placeholder="Price"
                        />
                        <input type="number"
                        className="form-control mb-5"
                        placeholder="Stock"
                        />
                        <div className="d-grid gap-2">
                        <Button className="btn btn-success"
                        onClick={handleAdd}
                        >
                            Add Product
                        </Button>
                        </div>
                    </form>
                </Col>

            </Row>
        </Container>
        </>
     );
}
 
export default AddProduct;