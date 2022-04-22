import { Container,Col, Row, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MenubarAdmin from "../components/menubarAdmin";

import { API } from '../config/api';


const UpdateProduct = () => {

    const navigate = useNavigate();
    const {id} = useParams();
    const [preview, setPreview] = useState(null); //For image preview
    const [product, setProduct] = useState({}); //Store product data
    const [form,setForm] = useState ({
        image:"",
        title:"",
        desc:"",
        price:"",
        qty:"",
    });

    const {image,title,desc,price,qty} = form;

    const getProduct = async(id) =>{
      try {
          const response = await API.get("/product/" + id);
          //store image into priview variable
          setPreview(response.data.data.product.image);
          //store data product into form
          setForm({
            ...form,
            title: response.data.data.product.title,
            desc: response.data.data.product.desc,
            price: response.data.data.product.price,
            qty: response.data.data.product.qty,    
          });
          setProduct(response.data.data.product);
      } catch (error) {
          console.log(error);
      }
    };

    useEffect(()=>{
        getProduct(id);
    },[])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:(e.target.type==="file"? e.target.files : e.target.value),
        });            
        // Create image url for preview
        if (e.target.type === "file") {
          let url = URL.createObjectURL(e.target.files[0]);
          setPreview(url);
        }
      };

      const handleSubmit = async (e) => {
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
            if(image){
            formdata.set("image",form?.image[0],form?.image[0]?.name)};
            formdata.set("title",form?.title);
            formdata.set("desc",form?.desc);
            formdata.set("price",form?.price);
            formdata.set("qty",form?.qty);

            //inset product data into database
            const response = await API.patch("/product/"+ product.id,formdata,config);
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
                    <h2 className="font-title">Edit Product</h2>
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
                        value={title}
                        onChange={handleChange}
                        />
                        <textarea 
                        className="form-control mb-2"
                        placeholder="Product Desc"
                        name="desc"
                        value={desc}
                        onChange={handleChange}
                        style={{height:130}}
                        ></textarea>
                        <input type="number"
                        className="form-control mb-2"
                        placeholder="Price"
                        name="price"
                        value={price}
                        onChange={handleChange}
                        />
                        <input type="number"
                        className="form-control mb-5"
                        placeholder="Stock"
                        name="qty"
                        value={qty}
                        onChange={handleChange}
                        />
                        <div className="d-grid gap-2">
                        <Button className="btn btn-success"
                        type = "submit"
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
 
export default UpdateProduct;