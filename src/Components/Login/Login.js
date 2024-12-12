import React, { useState } from 'react';
import './login.css';
import loginImage from './vecteezy_unlock-personal-password-account-security_4417585.svg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Make the POST request to the backend API
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Successful login
        localStorage.setItem('token', data.token);  // Save the token in localStorage
        localStorage.setItem('role', data.role);    // Save the role (if needed)
        setErrorMessage('');
        // Redirect or update the UI based on the role
        console.log('Login successful:', data);
      } else {
        // Error during login
        setErrorMessage(data.message || 'Something went wrong');
      }
    } catch (error) {
      setErrorMessage('Network error. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="LoginForm font-[sans-serif]">
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="mb-8">
                <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                <p className="text-gray-500 text-sm mt-4 leading-relaxed">Sign in to your account and explore a world of possibilities. Your journey begins here.</p>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">User name</label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-orange-600"
                    placeholder="Enter email"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-orange-600"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              {errorMessage && (
                <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="javascript:void(0);" className="text-orange-600 hover:underline font-semibold">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none"
                  disabled={loading}
                >
                  {loading ? 'Logging in...' : 'Log in'}
                </button>
              </div>

              <p className="text-sm !mt-8 text-center text-gray-800">
                Don't have an account{' '}
                <a href="/register" className="text-orange-600 font-semibold hover:underline ml-1 whitespace-nowrap">
                  Register here
                </a>
              </p>
            </form>
          </div>
          <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
            <img src={loginImage} className="w-full h-full max-md:w-4/5 mx-auto block object-cover" alt="Dining Experience" />
          </div>
        </div>
      </div>
    </div>
  );
}
