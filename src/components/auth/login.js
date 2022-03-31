import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const goHome = ()=>{
        navigate("/product");    
    }

    return (
        <div className="card-container container mx-4 my-4">
            <div className="row align-items-center">
                <p className="login-title">Login</p>
                <div className="card-form">
                <form>
                   <div className="input-container"> 
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
                       className="btn btn-login px-3 py-2 mt-4"
                       //type="submit"
                       onClick={goHome}
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