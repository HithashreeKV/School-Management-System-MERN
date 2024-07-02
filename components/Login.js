// Login.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = ({ history }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('/api/users/login', { email, password });
//       localStorage.setItem('token', res.data.token);
//       history.push('/dashboard');
//     } catch (err) {
//       console.error(err.response.data);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h3>Login</h3>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//       <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       );
//     };

//     export default Login;

// client/src/components/Login.js
// 

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Ensure you have the correct path to your CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/users/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="login-bg App-header">
      <form onSubmit={handleSubmit} className="login-form">
        <h3>Login</h3>
        {error && <p className="error-message">{error}</p>}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
