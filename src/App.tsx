import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./routes/auth/UI";
import Dashboard from "./routes/Dashboard";
import UserDetails from "./routes/user";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route index element={<Login />} />
      <Route path="/dashboard/users" element={<Dashboard />} />
      <Route path="/dashboard/users/:id" element={<UserDetails />} />
    </Routes>
  );
}

export default App;
