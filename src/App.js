import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Error404 from './pages/404';
import Navbar from './components/Navbar';
import Product from './pages/products/Product';
import PaymentStripeComplete from './pages/PaymentStripeComplete';
import Privacy from './pages/Privacy';
import CookieBar from './components/CookieBar';
import PageInfo from './components/PageInfo';

function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/product/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/paymentComplete" element={<PaymentStripeComplete />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <CookieBar />
      <PageInfo />
    </Router>
  );
}

export default App;
