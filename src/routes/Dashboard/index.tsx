import React from "react";
import Layout from "../../components/Layout";
import style from "./index.module.scss";
import usersIcon from "../../assets/icons/users.svg";
import active_users from "../../assets/icons/active-users.svg";
import loans from "../../assets/icons/loans.svg";
import savings from "../../assets/icons/savings.svg";
import filter from "../../assets/icons/filter.svg";
import more from "../../assets/icons/more-vert.svg";
import axios from "axios";
import { Users } from "./types/Users";
import Pagination from "../../components/Pagination";
import { FadeLoader } from "react-spinners";

const Dashboard = () => {
  const [users, setUsers] = React.useState<Users[]>([]);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [usersPerPage] = React.useState<number>(10);

  const [loading, setLoading] = React.useState<boolean>(false);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  console.log(currentPage);

  // const [showFilter, setShowFilter] = React.useState<boolean>(false);

  const cards = [
    {
      icon: usersIcon,
      title: "users",
      number: users.length,
    },
    {
      icon: active_users,
      title: "Active Users",
      number: "2,453",
    },
    {
      icon: loans,
      title: "Users with Loans",
      number: "2,453",
    },
    {
      icon: savings,
      title: "Users with Savings",
      number: "2,453",
    },
  ];

  React.useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      await axios
        .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
        .then((res) => {
          if (res.status === 200) {
            setUsers(res.data);
            console.log(res);
            setLoading(false);
          }
        });
    };

    fetchUsers();
  }, []);

  return (
    <Layout>
      <div className={style["dashboard--container"]}>
        <p>Users</p>

        <div className={style["dashboard--container__cards"]}>
          {cards.map((item, index) => (
            <div className={style["card"]} key={index}>
              <div className={style["icon"]}>
                <img src={item.icon} alt={item.title} />
              </div>
              <p className={style["title"]}>{item.title}</p>
              {loading ? (
                <FadeLoader color="#39cdcc" />
              ) : (
                <p className={style["number"]}>{item.number}</p>
              )}
            </div>
          ))}
        </div>
        <div className={style["dashboard--container__table"]}>
          <table cellPadding={2}>
            <thead>
              <tr>
                {theads.map((item, index) => (
                  <th key={index}>
                    <span>{item}</span>
                    {item === "" ? (
                      ""
                    ) : (
                      <span>
                        <img src={filter} alt="filter" />
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <FadeLoader color="#39cdcc" />
              ) : (
                currentUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user?.orgName}</td>
                    <td>{user?.userName}</td>
                    <td>{user?.email}</td>
                    <td>{user?.phoneNumber}</td>
                    <td>
                      {new Date(user.createdAt).toLocaleString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </td>
                    <td>{user.id}</td>
                    <td>
                      <img src={more} alt="more-vert" />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <Pagination
          usersPerPage={usersPerPage}
          totalUsers={users.length}
          paginate={paginate}
          activePage={currentPage}
        />
      </div>
    </Layout>
  );
};

const theads = [
  "organization",
  "username",
  "email",
  "phone number",
  "date joined",
  "status",
  "",
];
export default Dashboard;
