import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Home from './Pages/Home';
import Product from './Pages/Product';
import ContactUs from './Pages/ContactUs';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login.js';
import Register from './Components/Register/Register.js';
import Footer from './Components/Footer/Footer';
import { useEffect } from 'react';

// Create a wrapper component to handle conditional rendering
const AppContent = () => {
  const location = useLocation();
  
  // Check if current path is login or register
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  
  // Add Bootstrap JS dynamically if needed
  useEffect(() => {
    if (!document.querySelector('script[src*="bootstrap.bundle.min.js"]')) {
      const bootstrapScript = document.createElement('script');
      bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
      bootstrapScript.integrity = 'sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz';
      bootstrapScript.crossOrigin = 'anonymous';
      document.body.appendChild(bootstrapScript);
    }
  }, []);

  return (
    <div className="App">
      {/* Conditionally render Header - hide on auth pages */}
      {!isAuthPage && <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      
      {/* Conditionally render Footer - hide on auth pages */}
      {!isAuthPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;