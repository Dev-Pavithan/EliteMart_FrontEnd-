import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Home from './Pages/Home';
import Product from './Pages/Product';
import ContactUs from './Pages/ContactUs';
import Header from '../src/Components/Header/Header';
import Login from '../src/Components/Login/Login.js';
import Register from '../src/Components/Register/Register.js';



import Footer from '../src/Components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Router>
      <div className="App"> 
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />


          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
     </Router>
    </div>
  );
}

export default App;
