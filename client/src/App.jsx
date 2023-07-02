import Navbar from "./components/Navbar";
import "./app.css";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState(null);

  const loader = async () => {
    try {
      const options = {
        withCredentials: true,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        }
      };
      const response = await axios.get('http://localhost:5000/auth/login/success',
          options);
      if (response.status === 200) {
        debugger;
        setUser(response.data.user);
      }
    } catch(error) {
      console.log(error);
      if (error.response.status === 401) {
        setUser(null);
        console.log('no active session');
        return;
      } else {
        throw new Error(error.message);
      }
    }
  }

  useEffect(() => {
    let script   = document.getElementById('googleScript');

    if (script.getAttribute('data-loaded') !== 'true') {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.onload = () => {
        loader().then();
        console.log('loaded');
      };
      document.body.appendChild(script);
    } else {
      loader().then();
    }

  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
