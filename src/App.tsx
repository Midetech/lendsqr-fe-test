import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./routes/auth/UI";
import Dashboard from "./routes/Dashboard";
import UserDetails from "./routes/user";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route index element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard/users" element={<Dashboard />} />
        <Route path="/dashboard/users/:id" element={<UserDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
