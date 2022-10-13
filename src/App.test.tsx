import { render, screen } from "@testing-library/react";
import App from "./App";
import Login from "./routes/auth/UI";
import Dashboard from "./routes/Dashboard";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import UserDetails from "./routes/user";

test("renders app component", async () => {
  render(
    <Router>
      <App />
    </Router>
  );
});

test("renders the login page", async () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const images = screen.getAllByRole("img");

  expect(screen.getByRole("heading")).toHaveTextContent(/Welcome!/);
  expect(images).toHaveLength(3);
  const button = screen.getByRole("button", { name: "LOG IN" });

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
});

test("renders the dashboard", async () => {
  render(
    <Router>
      <Dashboard />
    </Router>
  );
});

test("renders the single user page", async () => {
  render(
    <Router>
      <UserDetails />
    </Router>
  );
});
