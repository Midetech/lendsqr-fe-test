import { render, screen } from "@testing-library/react";
import Dashboard from "./index";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";

async function withFetchUsers() {
  const res = await fetch(
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
  );
  const json = await res.json();

  return json;
}

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    })
  ) as jest.Mock;
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe("withFetchUsers", () => {
  test("Fetch all users", async () => {
    const fetchMock = jest
      .spyOn(global, "fetch")
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({ json: () => Promise.resolve([]) })
        ) as jest.Mock
      );

    const json = await withFetchUsers();
    expect(fetchMock).toHaveBeenCalledWith(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    );

    expect(Array.isArray(json)).toEqual(true);
    expect(json.length).toEqual(0);
  });
});

test("renders the dashboard", async () => {
  render(
    <Router>
      <Dashboard />
    </Router>
  );
});
