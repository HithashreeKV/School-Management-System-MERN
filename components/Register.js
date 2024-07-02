// // // Register.js
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const Register = ({ history }) => {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [role, setRole] = useState('student');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await axios.post('/api/users/register', { name, email, password, role });
// //       localStorage.setItem('token', res.data.token);
// //       history.push('/dashboard');
// //     } catch (err) {
// //       console.error(err.response.data);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <h3>Register</h3>
// //       <div>
// //         <label>Name:</label>
// //         <input
// //           type="text"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //           required
// //         />
// //         </div>
// //           <div>
// //             <label>Email:</label>
// //             <input
// //               type="email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <div>
// //             <label>Password:</label>
// //             <input
// //               type="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <div>
// //             <label>Role:</label>
           

// //  <select value={role} onChange={(e) => setRole(e.target.value)}>
// //               <option value="student">Student</option>
// //               <option value="teacher">Teacher</option>
// //               <option value="admin">Admin</option>
// //             </select>
// //           </div>
// //           <button type="submit">Register</button>
// //         </form>
// //       );
// //     };

// //     export default Register;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Register.css';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/users/register', { email, password });
//       navigate('/login');
//     } catch (err) {
//       setError(err.response.data.message);
//     }
//   };

//   return (
//     <div className="register-bg App-header">
//       <form onSubmit={handleSubmit} className="register-form">
//         <h3>Register</h3>
//         {error && <p className="error-message">{error}</p>}
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Ensure you have the correct path to your CSS file

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/users/register', { name, email, password, role });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="register-bg App-header">
      <form onSubmit={handleSubmit} className="register-form">
        <h3>Register</h3>
        {error && <p className="error-message">{error}</p>}
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
