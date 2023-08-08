import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
// import Navbar from './Components/Navbar';
import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
import Signup from './Pages/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        {/* <Navbar /> */}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;