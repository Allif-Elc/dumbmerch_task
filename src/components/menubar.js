import {Link} from 'react-router-dom'

const Menubar = (props) => {

    return ( 
        <nav className="mx-4 my-3">
            <div className="row align-items-start">
            <div className="col justify-content-start d-flex">
                <Link to="/product">
                    <img src={require("../assets/icon-dumbmerch.png")} 
                    alt="home-icon"
                    className="me-4"
                    style={{width:70,height:68.22}}
                     />
                </Link>
                {props?.isHome =='home'? 
                <form 
                className="d-flex"
                style={{width:420,height:30.22}}    
                >
                    <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-danger" type="submit">Search</button>
                </form>:<></>
                }
            </div>
            <div className="col d-flex justify-content-end">
                <div className="px-2 mx-1">
                    <Link className="menu-name"to="/complain">Complain</Link>
                </div>
                <div className="px-2 mx-1">
                    <Link className="menu-name" to="/profile">Profile</Link>
                </div>
                <div className="px-2 mx-1">
                    <Link className="menu-name" to="/">Logout</Link>
                </div>
            </div>
            </div>            
        </nav>
     );
}
 
export default Menubar;