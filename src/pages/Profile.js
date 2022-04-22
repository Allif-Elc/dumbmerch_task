import { useContext,useEffect, useState } from "react";
//import { Button } from "react-bootstrap";
import Menubar from "../components/menubar";
import { UserContext } from "../context/userContext";
import imgBlank from "../assets/Image-Not-Available.png";

import { API } from "../config/api";
const Profile = () => {

    const [state] = useContext(UserContext);

    const [profile, setProfile] = useState({});
    const [transaction, setTransaction] = useState([]);

    //get data profile
    const getProfile = async () => {
        try {
            //retrive data from database
            const response = await API.get("/profile");
            //strore data to variable useState
            console.log(response);
            if(response.data.status === "error"){
                setProfile({});                
            }else{
            setProfile(response.data.data);
            }
        } catch (error) {
            console.log(error);
        };
    };

    //get data transaction
    const getTransaction = async () => {
        try {
            //retrive data transacation from database
            const response = await API.get("/transaction");
            //store data to variable useState
            console.log(response)
            setTransaction(response.data.data);
        } catch (error) {
            console.log(error);
        };
    };

    console.log(transaction)
    console.log(profile);

    useEffect(() =>{
        getProfile();
        getTransaction();
    },[]);

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
                        {/* {profile?.photo ? profile.photo : imgBlank} */}
                        <img src= {profile?.photo ? profile.photo : imgBlank}
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
                                <p className="profile-info">{state.user.name}</p>
                            </li>
                            <li className="profile-li">
                                <p className="profile-title">Email</p>
                                <p className="profile-info">{state.user.email}</p>
                            </li>
                            <li className="profile-li">
                                <p className="profile-title">Phone</p>
                                <p className="profile-info">{profile?.phone ? profile.phone : "-"}</p>
                            </li>
                            <li className="profile-li">
                                <p className="profile-title">Gender</p>
                                <p className="profile-info">{profile?.gender ? profile.gender : "-"}</p>
                            </li>
                            <li className="profile-li">
                                <p className="profile-title">Address</p>
                                <p className="profile-info">{profile?.address ? profile.address : "-"}</p>
                            </li>
                        </ul>
                        
                    </div>    
                </div>
                <div className="col-5">
                {transaction.length != 0 ?(
                    <>
                    {transaction?.map((item,index)=>(
                    <div key={index}
                    className="col d-flex justify-content-between px-3 py-2"
                    style={{width:524,height:145,background:"#303030"}}
                    >
                        <div className="col-9 d-flex">
                            <div
                                style={{width:100,height:120,border:"1px solid white"}}    
                            >
                                
                                <img src={item?.product?.image ? item?.product?.image : imgBlank} 
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
                                    <p className="transaction-title mb-1">{item?.product?.title ? item?.product?.title : "-"}</p>
                                    <p className="transaction-date mb-1">tes {item?.createdAt}</p>
                                    <p className="transaction-info mb-1">Price: Rp. {item?.price ? item?.price :"-"} </p>
                                    {/* <p className="transaction-info">Item: {item.product.qty} pcs</p> */}
                                </li>

                                <li className="profile-li">
                                    <p className="transaction-total">Sub Total: Rp {item?.price ? item?.price : "-"}</p>
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
                    ))}
                    </>):(              
                    <div className="no-data-transaction">No transaction</div>
                    )}

                </div>
            </div>
        </div>
    </>      

 );
}
 
export default Profile;
