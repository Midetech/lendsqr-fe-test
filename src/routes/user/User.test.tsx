import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import UserDetails from "./index";

const data = {
  createdAt: "2072-12-27T03:44:22.522Z",
  orgName: "labore-dolor-et",
  userName: "Wilburn.Rice",
  email: "Maverick.Hyatt83@gmail.com",
  phoneNumber: "(553) 208-0727 x31321",
  lastActiveDate: "2099-02-28T23:17:40.013Z",
  profile: {
    firstName: "Darian",
    lastName: "Rolfson",
    phoneNumber: "494-278-0946",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg",
    gender: "Male",
    bvn: "815809412",
    address: "Gusikowski Locks",
    currency: "NGN",
  },
  guarantor: {
    firstName: "Celine",
    lastName: "Monahan",
    phoneNumber: "1-482-227-3654 x71086",
    gender: "Male",
    address: "O'Hara Centers",
  },
  accountBalance: "496.00",
  accountNumber: "GWQUSEH1",
  socials: {
    facebook: "@lendsqr",
    instagram: "@lendsqr",
    twitter: "@lendsqr",
  },
  education: {
    level: "Bsc",
    employmentStatus: "Employed",
    sector: "FinTech",
    duration: "2 Years",
    officeEmail: "Edna4@yahoo.com",
    monthlyIncome: ["128.57", "118.07"],
    loanRepayment: "122.47",
  },
  id: "1",
};

async function withFetchSingleUser(id: number) {
  const res = await fetch(
    `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
  );
  const json = await res.json();

  return json;
}

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(data),
    })
  ) as jest.Mock;
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe("withFetchSigleUser", () => {
  test("Fetch single user", async () => {
    const fetchMock = jest.spyOn(global, "fetch").mockImplementation(
      jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(data),
        })
      ) as jest.Mock
    );

    const json = await withFetchSingleUser(1);
    expect(fetchMock).toHaveBeenCalledWith(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${1}`
    );

    expect(json).toBe(data);
  });
});

test("renders the single user page", async () => {
  render(
    <Router>
      <UserDetails />
    </Router>
  );
});
