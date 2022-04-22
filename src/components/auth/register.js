import { useContext,useState } from "react";
import { Alert } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import { API } from "../../config/api";
import { UserContext } from "../../context/userContext";

const Register = () => {

    // const navigate = useNavigate();

    const [state,dispatch] = useContext(UserContext);

    const [message,setMessage] = useState(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password} = form;

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = async (e) => {
        try {
        e.preventDefault();

        //config header content-type
        const config = {
            headers:{
                "Content-type": "application/json",
            }
        };

        //req data body
        const body = JSON.stringify(form);

        //insert data to database using Rest API
        const response = await API.post('/register', body, config);
        
        //alert notification
        if (response.data.status == "success"){
            const alert = (
                <Alert variant="success" className="py-1">
                    Success
                </Alert>
            );

            setMessage(alert);

            //empty buffer data user 
            setForm({
                name:"",
                email:"",
                password:"",
            })
        }else{
            const alert = (
                <Alert variant="danger" className="py-1">
                    Failed
                </Alert>
            );

            setMessage(alert);
        };

        }catch (error) {
            const alert = (
                <Alert variant="danger" className="py-1">
                    Failed
                </Alert>
            );
            
            setMessage(alert);
            console.log(error);
        };
    };


    return (  

        <div className="card-container container mx-4 py-4">
        {message && message}
        <div className="row align-items-center">
            <p className="login-title">Register</p>
            <div className="card-form">
            <form onSubmit={handleSubmit}>
               <div className="input-container"> 
               <input type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={handleChange}
                className="form-control px-3 py-2 mb-3" 
                />
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
                   className="btn btn-login mt-4"
                   type="submit"
                   >
                       Register
                   </button>
               </div>
            </form>
        </div>
        </div>
    </div>
    );
}
 
export default Register;