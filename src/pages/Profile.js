
//import { Button } from "react-bootstrap";
import Menubar from "../components/menubar";

const Profile = () => {
    return ( 
    <>
        <header>
            <Menubar/>
        </header>
        <div className="container-fluid">
            <div className="row mx-3">
                <div className="col-7">
                    <h2 className="my-5 font-title">Profile</h2>
                </div>
                <div className="col-5">
                    <h2 className="my-5 font-title">My Transaction</h2>
                </div>
            </div>
            <div className="row mx-3">
                <div className="col-7 d-flex">
                    <div
                    className="col-5"
                    style={{width:338,height:435}}    
                    >
                        <img src={require("../assets/Image-Not-Available.png")} 
                        alt="detail-product-img"
                        style={{
                            height:"100%",
                            width: "100%",
                            objectFit:"cover",
                        }} />
                    </div>
                    <div className="col-7">
                        <ul className="profile-ul">
                            <li className="profile-li">
                                <p className="profile-title">Name</p>
                                <p className="profile-info">John Due</p>
                            </li>
                            <li className="profile-li">
                                <p className="profile-title">Email</p>
                                <p className="profile-info">John.Due@gmail.com</p>
                            </li>
                            <li className="profile-li">
                                <p className="profile-title">Phone</p>
                                <p className="profile-info">089922331231</p>
                            </li>
                            <li className="profile-li">
                                <p className="profile-title">Gender</p>
                                <p className="profile-info">Male</p>
                            </li>
                            <li className="profile-li">
                                <p className="profile-title">Address</p>
                                <p className="profile-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, perspiciatis.</p>
                            </li>
                        </ul>
                        
                    </div>    
                </div>
                <div className="col-5">
                    <div
                    className="col d-flex justify-content-between px-3 py-2"
                    style={{width:524,height:145,background:"#303030"}}
                    >
                        <div className="col-9 d-flex">
                            <div
                                style={{width:100,height:120,border:"1px solid white"}}    
                            >
                                <img src={require("../assets/Image-Not-Available.png")} 
                                alt="detail-product-img"
                                style={{
                                    height:"100%",
                                    width: "100%",
                                    objectFit:"cover",
                                }} />
                            </div>
                            <div>
                            <ul>
                                <li className="profile-li mb-5">
                                    <p className="transaction-title mb-1">Mouse</p>
                                    <p className="transaction-date mb-1"><b>Saturday</b>: 14 July 2021</p>
                                    <p className="transaction-info mb-1">Price: Rp. 500.000</p>
                                    <p className="transaction-info">Item: 1 pcs</p>
                                </li>

                                <li className="profile-li">
                                    <p className="transaction-total">Sub Total: Rp 500.000</p>
                                </li>
                            </ul>                        
                            </div>
                        </div>    
                        <div className="col-3 d-flex align-items-center justify-content-end"
                        style={{width:70,height:70}}                       
                    >
                        <img src={require("../assets/icon-dumbmerch.png")} 
                        alt="icon-transaction"
                        style={{
                            maxHeight:"100%",
                            maxWidth: "100%",
                            objectFit:"contain",
                        }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>      

 );
}
 
export default Profile;
