import * as React from "react";
import App from "./App";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import Aboutus from "./Pages/Aboutus";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Booknow from "./Pages/Booknow";
import Home from "./Components/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Home" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route Path="/Booknow" element={<Booknow />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


