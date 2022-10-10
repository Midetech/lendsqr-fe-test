import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./routes/auth/UI";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route index element={<Login />} />
    </Routes>
  );
}

export default App;
