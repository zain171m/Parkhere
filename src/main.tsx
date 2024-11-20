import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Login from "./Login";
import SignUp from "./SignUp";
import Parking from "./Parking";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/parking" element={<Parking />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
