import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const goHome = ()=>{
        navigate("/productadmin");    
    }


    return (  

        <div className="card-container container mx-4 py-4">
        <div className="row align-items-center">
            <p className="login-title">Register</p>
            <div className="card-form">
            <form>
               <div className="input-container"> 
               <input type="text"
                placeholder="Name"
                name="name"
                className="form-control px-3 py-2 mb-3" 
                />
                <input type="email"
                placeholder="Email"
                name="email"
                className="form-control px-3 py-2 mb-3" 
                />
                <input type="password"
                placeholder="Password"
                name="password"
                className="form-control px-3 py-2 mb-3" 
                />
               </div> 
               <div className="d-grid gap-2">
                   <button 
                   className="btn btn-login mt-4"
                   type="submit"
                   onClick={goHome}
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