import {Link} from 'react-router-dom'

const MenubarAdmin = () => {

    return ( 
        <nav className="mx-4 my-3">
            <div className="row align-items-start">
            <div className="col justify-content-start d-flex">
                <Link to="/productadmin">
                    <img src={require("../assets/icon-dumbmerch.png")} 
                    alt="home-icon"
                    className="me-4"
                    style={{width:70,height:68.22}}
                     />
                </Link>
                
            </div>
            <div className="col d-flex justify-content-end">
                <div className="px-2 mx-1">
                    <Link className="menu-name"to="/complain">Complain</Link>
                </div>
                <div className="px-2 mx-1">
                    <Link className="menu-name"to="/category">Category</Link>
                </div>
                <div className="px-2 mx-1">
                    <Link className="menu-name" to="/productadmin">Product</Link>
                </div>
                <div className="px-2 mx-1">
                    <Link className="menu-name" to="/">Logout</Link>
                </div>
            </div>
            </div>            
        </nav>
     );
}
 
export default MenubarAdmin;