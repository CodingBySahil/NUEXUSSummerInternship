import { useState } from 'react';

const LoginSignup = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setForgotPassword(false);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const password = e.target.password.value;

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    localStorage.setItem(email.toLowerCase(), JSON.stringify({ email: email.toLowerCase(), password }));
    alert('Signup successful! You can now log in.');
    setIsLogin(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const password = e.target.password.value;

    const storedUser = JSON.parse(localStorage.getItem(email.toLowerCase()));

    if (!storedUser || storedUser.password !== password) {
      alert('Invalid credentials.');
      return;
    }

    alert('Login successful! You can now access the quiz.');
    onLoginSuccess();  // Notify App of login success
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem(email.toLowerCase()));

    if (!storedUser) {
      alert('No account found with this email.');
      return;
    }

    // Simulating password reset process
    const newPassword = prompt('Enter a new password:');
    if (newPassword && newPassword.length >= 6) {
      storedUser.password = newPassword;
      localStorage.setItem(email.toLowerCase(), JSON.stringify(storedUser));
      alert('Password reset successful! You can now log in.');
      setForgotPassword(false);
      setIsLogin(true);
    } else {
      alert('Password must be at least 6 characters long.');
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          {isLogin ? (forgotPassword ? 'Reset Password' : 'Login') : 'Signup'}
        </h2>
        <form onSubmit={isLogin ? (forgotPassword ? handleForgotPassword : handleLogin) : handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </div>
          {!forgotPassword && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Choose a username"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                />
              </div>
            </>
          )}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {isLogin ? (forgotPassword ? 'Reset Password' : 'Login') : 'Signup'}
          </button>
        </form>
        <p className="mt-4">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <button
                onClick={toggleForm}
                className="text-blue-500 underline"
              >
                Sign up
              </button>
              <br />
              <button
                onClick={() => setForgotPassword(true)}
                className="text-blue-500 underline mt-2"
              >
                Forgot Password?
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={toggleForm}
                className="text-blue-500 underline"
              >
                Log in
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
