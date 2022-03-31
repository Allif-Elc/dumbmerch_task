import { Routes, Route} from 'react-router-dom';

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


function App() {
  return (

    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/product' element={<Home/>}/>
      <Route path='/detail' element={<DetailProduct/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/complain' element={<Complain/>}/>
      <Route path='/productadmin' element={<ListProduct/> }/>
      <Route path='/category' element={<Category/> }/>
      <Route path='/updateproduct' element={<UpdateProduct/> }/>
      <Route path='/updatecategory' element={<UpdateCategory/> }/>
      <Route path='/addproduct' element={<AddProduct/> }/>
      <Route path='/addcategory' element={<AddCategory/> }/>
      <Route path='/payment' element={<Payment/> }/>


    </Routes>


  );
}

export default App;
