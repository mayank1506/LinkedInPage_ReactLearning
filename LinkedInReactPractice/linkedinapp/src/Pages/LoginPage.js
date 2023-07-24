import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from './redux/actions';
import './LoginPage.css'; 
import { useNavigate} from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './Header';


const LoginPage = () => {
  const Navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'demo' && password === 'demo') {
      dispatch(loginSuccess());
      Navigate('/header')
      Navigate('/dashboard');
    }
    else alert("Invalid Username or Password");
  };

  if (isLoggedIn) {
    return <Navigate to="/Header" />;
  }
  
  return (
    <div className='login-page'>
    <div className='login-box'>
      <h2>Login</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => handleLogin()}>Login</button>
      <main>{}</main>
    </div>
    </div>
  );
};



export default LoginPage;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './LoginPage.css';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const Navigate = useNavigate();

//   const handleLogin = () => {
  
//     if (username === 'admin' && password === 'password') {
//       Navigate('/dashboard');
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-box">
//         <h2>Login</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button onClick={handleLogin}>Login</button>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;