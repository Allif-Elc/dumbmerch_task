import { Container,Col, Row, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import MenubarAdmin from '../components/menubarAdmin';
import { API } from "../config/api";

const AddProduct = () => {
   
    //For image preview
    const [preview, setPreview] = useState(null);  
    const navigate = useNavigate();

    const [form,setForm] = useState ({
        image:"",
        title:"",
        desc:"",
        price:"",
        qty:"",
    });

    const {image,title,desc,price,qty} = form;


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:
                e.target.type==="file"? e.target.files : e.target.value,
        });
        // Create image url for preview
        if (e.target.type === "file") {
          let url = URL.createObjectURL(e.target.files[0]);
          setPreview(url);
        };
    };

    const handleSubmit = async(e) => {
        try {
            e.preventDefault();

            //set headers content-type
            const config = {
                headers : {
                    "Content-type": "multipart/form-data",
                },
            };
            //req body store as object
            let formdata = new FormData();
            formdata.set("image",form?.image[0],form?.image[0].name);
            formdata.set("title",form?.title);
            formdata.set("desc",form?.desc);
            formdata.set("price",form?.price);
            formdata.set("qty",form?.qty);

            console.log(form)
            //inset product data into database
            const response = await API.post("/product",formdata,config);
            //back to product admin
            navigate("/productadmin");
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
                    <h2 className="font-title">New Product</h2>
                </Col>
                <Col xs="12">
                    <form onSubmit={handleSubmit}>
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
                        <label htmlFor="upload" className="btn btn-danger my-3">
                            Upload Images
                        </label>

                        <input type="text"
                        className="form-control mb-2"
                        placeholder="Product Name"
                        name="title"
                        onChange={handleChange}

                        />
                        <textarea 
                        className="form-control mb-2"
                        placeholder="Product Desc"
                        name="desc"
                        onChange={handleChange}
                        style={{height:130}}
                        ></textarea>
                        
                        <input type="number"
                        className="form-control mb-2"
                        placeholder="Price"
                        name="price"
                        onChange={handleChange}
                        />
                        
                        <input type="number"
                        className="form-control mb-5"
                        placeholder="Stock"
                        name="qty"
                        onChange={handleChange}
                        />
                        <div className="d-grid gap-2">
                        <Button className="btn btn-success"
                        type="submit"
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