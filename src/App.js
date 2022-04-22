import { Routes, Route, useNavigate} from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from './context/userContext';
import { API, setAuthToken } from './config/api';

import Landing from "./pages/Landing";
import Home from './pages/Home';
import DetailProduct from './pages/Detailproduct';
import Profile from './pages/Profile';
import Complain from './pages/Complain';
import ListProduct from './pages/ListProduct';
import Category from './pages/Category';
import UpdateProduct from './pages/UpdateProduct';
import UpdateCategory from './pages/UpdateCategory';
import AddProduct from './pages/AddProduct';
import AddCategory from './pages/AddCategory';
import Payment from './pages/Payment';
import ComplainAdmin from './pages/ComplainAdmin';



function App() {

  let navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);
  //Init token on axios everytime App refresh

  useEffect(() => {
    if(localStorage.token){
       setAuthToken(localStorage.token);
    };

    //Redirect Auth
    if (state.isLogin == false){
      navigate("/");
    }else{
      if (state.user.status =="seller"){
        navigate("/productadmin");
      }else if (state.user.status == "customer"){
        navigate("/product")
      };
    };

  },[state]);

  const checkUser = async () =>{
    try {
      const response = await API.get("/check-auth");

      //check token if incorrect
      if(response?.status == 404){
        return dispatch({
          type: "AUTH_ERROR",
        });
      };

      //Get user Data
      let payload = response.data.data.user;
      //get token from localStorage
      payload.token = localStorage.token;

      console.log(response)
      console.log(state);
      //Send data to UserContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (

    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/product' element={<Home/>}/>
      <Route path='/detail/:id' element={<DetailProduct/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/complain' element={<Complain/>}/>
      <Route path='/complainadmin' element={<ComplainAdmin/>}/>
      <Route path='/productadmin' element={<ListProduct/> }/>
      <Route path='/category' element={<Category/> }/>
      <Route path='/updateproduct/:id' element={<UpdateProduct/> }/>
      <Route path='/updatecategory/:id' element={<UpdateCategory/> }/>
      <Route path='/addproduct' element={<AddProduct/> }/>
      <Route path='/addcategory' element={<AddCategory/> }/>
      <Route path='/payment' element={<Payment/> }/>


    </Routes>


  );
}

export default App;
