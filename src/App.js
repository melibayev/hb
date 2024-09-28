import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/commonjs/scroll';
import Layout from './components/Layout';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
