import { Link } from "react-router-dom";

const ListProductCard = ({ item, index }) => {
   
    return ( 
        <div className="product-card">
            <div style={{width: 241,height: 312}}>
                <Link to="/detail"
                key={index}
                >
                    <img src={item.url} 
                    alt="product-img"
                    style={{
                        height:"100%",
                        width: "100%",
                        objectFit:"cover",
                    }} />
                </Link>
            </div> 
            <div className="ms-3">
                <p className="product-title mt-3 mb-2">{item.name}</p>
                <p className="product-info mb-1">Rp.{item.price}</p>
                <p className="product-info mb-1">Stock:{item.stock}</p>
            </div>
        </div>
     );
}
 
export default ListProductCard;