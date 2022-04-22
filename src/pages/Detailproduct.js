import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import imgBlank from "../assets/Image-Not-Available.png";

import Menubar from "../components/menubar";

// Import useQuery and useMutation
import { useQuery, useMutation } from 'react-query';
import { API_query } from "../config/api";

const DetailProduct = () => {
    let navigate = useNavigate();
    let {id} = useParams();
    let api = API_query();
    //const [product1,setProduct1] = useState({});

    // Fetching product data from database
    let { data: product, refetch } = useQuery('Cache', async () => {
      const config = {
        method: 'GET',
        headers: {
          Authorization: 'Basic ' + localStorage.token,
        },
      };
      const response = await api.get('/product/' + id, config);
      console.log(response);
      //setProduct1(response.data)
      return response.data;
    });

    //console.log(product1);

  
    useEffect(() => {
      //change this to the script source you want to load, for example this is snap.js sandbox env
      const midtransScriptUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
      //change this according to your client-key
      const myMidtransClientKey = 'SB-Mid-client-E5ESIpflc6n1XJv1';
  
      let scriptTag = document.createElement('script');
      scriptTag.src = midtransScriptUrl;
      // optional if you want to set script attribute
      // for example snap.js have data-client-key attribute
      scriptTag.setAttribute('data-client-key', myMidtransClientKey);
  
      document.body.appendChild(scriptTag);
      return () => {
        document.body.removeChild(scriptTag);
      };
    }, []);
  
    const handleBuy = useMutation(async () => {
      try {
        // Get data from product
        const data = {
          idProduct: product.id,
          idSeller: product.user.id,
          price: product.price,
        };
  
        // Data body
        const body = JSON.stringify(data);
  
        // Configuration
        const config = {
          method: 'POST',
          headers: {
            Authorization: 'Basic ' + localStorage.token,
            'Content-type': 'application/json',
          },
          body,
        };
  
        // Insert transaction data
        const response = await api.post('/transaction', config);
        console.log(response);
        const token = response.payment.token;
  
        window.snap.pay(token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            console.log(result);
            navigate('/profile');
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            console.log(result);
            navigate('/profile');
          },
          onError: function (result) {
            /* You may add your own implementation here */
            console.log(result);
          },
          onClose: function () {
            /* You may add your own implementation here */
            alert('you closed the popup without finishing the payment');
          },
        });
      } catch (error) {
        console.log(error);
      }
    });

    return ( 
        <>
        <header>
            <Menubar/>
        </header>

        <div className="container mt-5">
        <div className="row">
            <div className="col d-flex">
                <div
                    style={{width:436,height:555,border:"1px solid white"}}    
                >
                    <img src={imgBlank} 
                    alt="detail-product-img"
                    style={{
                        height:"100%",
                        width: "100%",
                        objectFit:"cover",
                    }}
                    />
                </div>
            </div>
            <div className="col d-flex">
                <div>
                    <div className="row">
                        <ul>
                            <li className="detail-product-li">
                                <p className="detail-title"> product.title</p>
                                <p className="detail-info">Stock: product.qty</p>
                            </li>
                        </ul>
                    </div>
                    <div className="row" 
                        style={{
                            height:325,
                            width:544,
                        }}
                    >
                        <p className="detail-info"> product.desc</p>
                    </div>
                    <div className="row">
                        <div className="row mb-3">
                        <p className="detail-price">Rp. product.price</p>
                        </div>
                        <div className="row">
                        <Button 
                        onClick={() => handleBuy.mutate()}
                        className="btn-detail" >Buy</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
     );
}
 
export default DetailProduct;