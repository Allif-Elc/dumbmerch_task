import { useContext,useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { API } from "../../config/api";

const Login = () => {

    const navigate = useNavigate();

    const [state,dispatch] = useContext(UserContext);

    const [message,setMessage] = useState(null);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const { email, password} = form;

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = async(e) => {
        try {
            e.preventDefault();

            //set header config content-type aplication
            const config = {
                headers: {
                    "Content-type": "application/json"
                },
            };

            //data req body
            const body = JSON.stringify(form);
            console.log(body)
            //send data to database using rest api
            const response = await API.post("/login", body, config);
            console.log(response);
            //checking response 
            if (response?.status == 200 ){
                //Send data to UseContext
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: response.data.data,
                });

                //Status Check
                if(response.data.data.status == "seller"){
                    navigate("/productadmin");
                }else{
                    navigate("/product");
                };

                //Alert Notification
                const alert = (
                    <Alert variant="success" className="py-1">
                        Success
                    </Alert>
                );
    
                setMessage(alert);
            }
        } catch (error) {
            const alert = (
                <Alert variant="danger" className="py-1">
                    Failed
                </Alert>
            );

            setMessage(alert);
            console.log(state)
            console.log(error);            
        };
    };

    return (
        <div className="card-container container mx-4 my-4">
            <div className="row align-items-center">
                <p className="login-title">Login</p>
                {message && message}
                <div className="card-form">
                <form onSubmit={handleSubmit}>
                   <div className="input-container"> 
                    <input type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleChange}    
                    className="form-control px-3 py-2 mb-3" 
                    />
                    <input type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}    
                    className="form-control px-3 py-2 mb-3" 
                    />
                   </div> 
                   <div className="d-grid gap-2">
                       <button 
                       className="btn btn-login px-3 py-2 mt-4"
                       type="submit"
                       >
                           Login
                       </button>
                   </div>
                </form>
            </div>
            </div>
        </div>
      );
}
 
export default Login;