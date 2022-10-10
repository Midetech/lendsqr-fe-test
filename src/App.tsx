import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./routes/auth/UI";
import Dashboard from "./routes/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route index element={<Login />} />
      <Route path="/dashboard/users" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
