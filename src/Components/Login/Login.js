// Login.jsx
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  useEffect(() => {
    // Add Bootstrap JS if needed
    if (!document.querySelector('script[src*="bootstrap.bundle.min.js"]')) {
      const bootstrapScript = document.createElement('script');
      bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
      bootstrapScript.integrity = 'sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz';
      bootstrapScript.crossOrigin = 'anonymous';
      document.body.appendChild(bootstrapScript);
    }

    // Add Font Awesome if not present
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const fontAwesome = document.createElement('link');
      fontAwesome.rel = 'stylesheet';
      fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      document.head.appendChild(fontAwesome);
    }

    // Initialize event listeners with unique IDs
    const uniqueRegisterBtn = document.getElementById('uniqueRegisterBtn');
    const uniqueLoginBtn = document.getElementById('uniqueLoginBtn');
    const uniqueMobileRegisterBtn = document.getElementById('uniqueMobileRegisterBtn');
    const uniqueMobileLoginBtn = document.getElementById('uniqueMobileLoginBtn');
    const uniqueAuthWrapper = document.getElementById('uniqueAuthWrapper');

    const handleRegisterClick = () => {
      uniqueAuthWrapper.classList.add("unique-panel-active");
    };

    const handleLoginClick = () => {
      uniqueAuthWrapper.classList.remove("unique-panel-active");
    };

    if (uniqueRegisterBtn) {
      uniqueRegisterBtn.addEventListener('click', handleRegisterClick);
    }
    if (uniqueLoginBtn) {
      uniqueLoginBtn.addEventListener('click', handleLoginClick);
    }
    if (uniqueMobileRegisterBtn) {
      uniqueMobileRegisterBtn.addEventListener('click', handleRegisterClick);
    }
    if (uniqueMobileLoginBtn) {
      uniqueMobileLoginBtn.addEventListener('click', handleLoginClick);
    }

    // Cleanup
    return () => {
      if (uniqueRegisterBtn) {
        uniqueRegisterBtn.removeEventListener('click', handleRegisterClick);
      }
      if (uniqueLoginBtn) {
        uniqueLoginBtn.removeEventListener('click', handleLoginClick);
      }
      if (uniqueMobileRegisterBtn) {
        uniqueMobileRegisterBtn.removeEventListener('click', handleRegisterClick);
      }
      if (uniqueMobileLoginBtn) {
        uniqueMobileLoginBtn.removeEventListener('click', handleLoginClick);
      }
    };
  }, []);

  return (
<div className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-6">
          <div className="unique-auth-wrapper" id="uniqueAuthWrapper">
            {/* Register Form Box */}
            <div className="unique-auth-form-box unique-register-form-box">
              <form action="#" onSubmit={(e) => e.preventDefault()}>
                <h1 className="unique-h1">Create Account</h1>
                <div className="unique-social-links">
                  <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" aria-label="Google"><i className="fab fa-google"></i></a>
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span className="unique-span">or use your email for registration</span>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required 
                  className="unique-input"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  className="unique-input"
                />
                <input 
                  type="password" 
                  placeholder="Password" 
                  required 
                  className="unique-input"
                />
                <button type="submit" className="unique-button">Sign Up</button>
                <div className="unique-mobile-switch">
                  <p className="unique-p">Already have an account?</p>
                  <button 
                    id="uniqueMobileLoginBtn" 
                    className="unique-mobile-button"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>

            {/* Login Form Box */}
            <div className="unique-auth-form-box unique-login-form-box">
              <form action="#" onSubmit={(e) => e.preventDefault()}>
                <h1 className="unique-h1">Sign In</h1>
                <div className="unique-social-links">
                  <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" aria-label="Google"><i className="fab fa-google"></i></a>
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span className="unique-span">or use your account</span>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  className="unique-input"
                />
                <input 
                  type="password" 
                  placeholder="Password" 
                  required 
                  className="unique-input"
                />
                <a href="#" className="unique-link">Forgot your password?</a>
                <button type="submit" className="unique-button">Sign In</button>
                <div className="unique-mobile-switch">
                  <p className="unique-p">Don't have an account?</p>
                  <button 
                    id="uniqueMobileRegisterBtn" 
                    className="unique-mobile-button"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>

            {/* Slide Panel */}
            <div className="unique-slide-panel-wrapper">
              <div className="unique-slide-panel">
                <div className="unique-panel-content unique-panel-content-left">
                  <h1 className="unique-h1 unique-white-text">Welcome Back!</h1>
                  <p className="unique-p unique-white-text">
                    Stay connected by logging in with your credentials and continue your experience
                  </p>
                  <button 
                    className="unique-transparent-btn" 
                    id="uniqueLoginBtn"
                  >
                    Sign In
                  </button>
                </div>
                <div className="unique-panel-content unique-panel-content-right">
                  <h1 className="unique-h1 unique-white-text">Hey There!</h1>
                  <p className="unique-p unique-white-text">
                    Begin your amazing journey by creating an account with us today
                  </p>
                  <button 
                    className="unique-transparent-btn" 
                    id="uniqueRegisterBtn"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;