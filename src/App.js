import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/commonjs/scroll';
import Layout from './components/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import AdminPanel from './pages/Admin';
import AdminLayout from './components/Layout/admin';
import AddProduct from './components/Admin/Products/AddProduct';
import AddImage from './components/Admin/Images/AddImage';
import AddVideo from './components/Admin/Videos/AddVideo';
import EditProduct from './components/Admin/Products/EditProduct';
import EditImage from './components/Admin/Images/EditImage';
import EditVideo from './components/Admin/Videos/EditVideo';
import MaleShoes from './pages/MaleShoes';
import JacketsCoats from './pages/JacketsCoats';

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/male/shoes' element={<MaleShoes />} />
          <Route path='/male/jackets-coats' element={<JacketsCoats />} />
        </Route>
      </Routes>

      <Routes> 
       <Route path='/admin' element={<AdminLayout />}> 
         <Route path='/admin/dashboard' element={<AdminPanel />} /> 
         <Route path='/admin/addproduct' element={<AddProduct />} /> 
         <Route path='/admin/addimage' element={<AddImage />} /> 
         <Route path='/admin/addvideo' element={<AddVideo />} /> 
         <Route path='/admin/editproduct' element={<EditProduct />} /> 
         <Route path='/admin/editimage' element={<EditImage />} /> 
         <Route path='/admin/editvideo' element={<EditVideo />} /> 
       </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
