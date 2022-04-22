//import { useState } from "react";
import Masonry from "react-masonry-css";
import { Col } from "react-bootstrap";

import Menubar from "../components/menubar";
import ListProductCard from "../components/card/listProductCard";
import { useEffect, useState } from "react";
import { API } from "../config/api";

const Home = () => {
    
    //store data product
    const [products, setProducts] = useState([])

    //get data product
    const getProduct = async () => {
        try {
            //retrive data product using rest api
            const response = await API.get('/products');
            //store data into variable
            setProducts(response.data.data);
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(()=>{
        getProduct();
    },[]);

  const isHome = "home";

  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 3,
    500: 2,
  };

  return (
    <>
      <header className="mb-5">
        <Menubar isHome={isHome} />
      </header>
      <div className="container-fluid">
        <h2 className="mx-3 my-5 font-title">Product</h2>
        <div className="mx-3">
          {products.length != 0 ? (
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {products?.map((item, index) => (
                <ListProductCard key={index} item={item} index={index} />
              ))}
            </Masonry>
          ) : (
            <Col>
              <div className="text-center pt-5">
                <img
                  src={require("../assets/Image-Not-Available.png")}
                  className="img-fluid"
                  style={{ width: "40%" }}
                />
                <div className="mt-3">No data product</div>
              </div>
            </Col>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
