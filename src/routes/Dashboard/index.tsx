import React from "react";
import Layout from "../../components/Layout";
import style from "./index.module.scss";
import usersIcon from "../../assets/icons/users.svg";
import active_users from "../../assets/icons/active-users.svg";
import loans from "../../assets/icons/loans.svg";
import savings from "../../assets/icons/savings.svg";
import filter from "../../assets/icons/filter.svg";
import more from "../../assets/icons/more-vert.svg";

import { Users } from "../../types/Users";
import Pagination from "../../components/Pagination";
import { BounceLoader, FadeLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { ActionDialog } from "./components/Action-dialog/action-dialog";
import { Filter } from "./components/Filter/filter";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { BeatLoader } from "react-spinners";

const Dashboard = () => {
  const [users, setUsers] = React.useState<Users[]>([]);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [usersPerPage] = React.useState<number>(10);

  const [loading, setLoading] = React.useState<boolean>(false);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const [showFilter, setShowFilter] = React.useState<boolean>(false);

  const [showDialog, setShowDialog] = React.useState<boolean>(false);
  const [selectedUser, setSelectedUser] = React.useState<number>();
  const [selectedTable, setSelectedTable] = React.useState<number>();

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [actionType, setActionType] = React.useState<string>("");
  const [isProcessing, setIsProcessing] = React.useState<boolean>(false);

  const toggleActionModal = (action: string) => {
    setActionType(action);
    setIsOpen(!isOpen);
    setShowDialog(false);
  };

  const activateOrBlackList = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsOpen(false);
    }, 3000);
  };

  const handleToggle = (index: number) => {
    setShowFilter(false);
    setSelectedUser(index);
    if (index !== selectedUser) {
      setShowDialog(true);
      return;
    }
    setShowDialog(!showDialog);
  };

  const openFilter = (index: number) => {
    setSelectedTable(index);
    setShowDialog(false);
    if (index !== selectedTable) {
      setShowFilter(true);
      return;
    }
    setShowFilter(!showFilter);
  };

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

  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users",
          { method: "GET" }
        );
        setLoading(false);
        const data = await response.json();
        setUsers(data);

        return data;
      } catch (error) {
        return error;
      }
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
                <BounceLoader color="#39cdcc" />
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
                    {showFilter && index === selectedTable && <Filter />}
                    <span>{item}</span>
                    {item === "" ? (
                      <span></span>
                    ) : (
                      <span onClick={() => openFilter(index)}>
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
                  <tr
                    key={user.id}
                    // onClick={() => navigate(`/dashboard/users/${user.id}`)}
                  >
                    <td>{user?.orgName}</td>
                    <td>{user?.userName}</td>
                    <td>{user?.email}</td>
                    <td>{user?.profile?.phoneNumber}</td>
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
                    <td>
                      <span
                        className={style[`${user.status}`] ?? style["inactive"]}
                      >
                        {user.status ?? "N/A"}
                      </span>
                    </td>
                    <td>
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => handleToggle(user.id)}
                      >
                        <img src={more} alt="more-vert" />
                      </div>
                      {showDialog && user.id === selectedUser && (
                        <ActionDialog
                          handleActivate={() => toggleActionModal("Activate")}
                          handleBlacklist={() => toggleActionModal("Blacklist")}
                          handleView={() =>
                            navigate(`/dashboard/users/${selectedUser}`)
                          }
                        />
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className={style["dashboard--container__footer"]}>
          <div className={style["sort"]}>
            <p>Showing</p>
            <select>
              <option>100</option>
            </select>
            <p>out of 100</p>
          </div>
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={users.length}
            paginate={paginate}
            activePage={currentPage}
          />
        </div>
      </div>

      <Modal isOpen={isOpen} toggleModal={() => setIsOpen(!isOpen)}>
        <div className={style["action--modal"]}>
          <p>Are you sure you want to {actionType}? </p>
          <div className={style["buttons"]}>
            <Button
              className="small--filled"
              type="submit"
              onClick={activateOrBlackList}
            >
              {" "}
              {isProcessing ? <BeatLoader color="#fff" /> : actionType}
            </Button>

            <Button
              className="small--ghost"
              type="reset"
              onClick={() => setIsOpen(!isOpen)}
            >
              {" "}
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
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
