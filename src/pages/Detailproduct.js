import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Menubar from "../components/menubar";

const DetailProduct = () => {
    
    const navigate = useNavigate();

    const handleBuy= ()=> {
        navigate("/payment");
    };

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
                    <img src={require("../assets/Image-Not-Available.png")} 
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
                                <p className="detail-title">Mouse</p>
                                <p className="detail-info">Stock: 60</p>
                            </li>
                        </ul>
                    </div>
                    <div className="row" 
                        style={{
                            height:325,
                            width:544,
                        }}
                    >
                        <p className="detail-info"> Wireless Mouse 
                        - Konektivitas wireless 2.4 GHz - Jarak wireless hingga 10 m - Plug and Play - Baterai tahan hingga 12 bulan Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.
                         </p>
                    </div>
                    <div className="row">
                        <div className="row mb-3">
                        <p className="detail-price">Rp. 500.000</p>
                        </div>
                        <div className="row">
                        <Button className="btn-detail" onClick={handleBuy}>Buy</Button>
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