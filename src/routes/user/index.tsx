import React from "react";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import style from "./index.module.scss";
import back from "../../assets/icons/back.svg";
import user from "../../assets/icons/user.svg";
import star from "../../assets/icons/star.svg";
import filled_star from "../../assets/icons/filled-star.svg";
import { useNavigate, useParams } from "react-router-dom";
import { Users } from "../../types/Users";
import Modal from "../../components/Modal";
import { BeatLoader } from "react-spinners";

const UserDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [userData, setUserData] = React.useState<Users>();
  const [currentTab, setCurretTab] = React.useState<string>("General Details");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [actionType, setActionType] = React.useState<string>("");
  const [isProcessing, setIsProcessing] = React.useState<boolean>(false);
  const toggleActionModal = (action: string) => {
    setActionType(action);
    setIsOpen(!isOpen);
  };

  const activateOrBlackList = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsOpen(false);
    }, 3000);
  };

  React.useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`,
          { method: "GET" }
        );
        setLoading(false);
        const data = await response.json();
        setUserData(data);

        return data;
      } catch (error) {
        return error;
      }
    };

    fetchUser();
  }, [id]);

  const handleTabChange = (tab: string) => {
    setCurretTab(tab);
  };

  const userDetails = [
    {
      title: "Personal Information",
      details: [
        {
          heading: "full  name",
          value: `${userData?.profile.firstName} ${userData?.profile.lastName}`,
        },
        {
          heading: "phone number",
          value: userData?.profile.phoneNumber,
        },
        {
          heading: "email address",
          value: userData?.email,
        },
        {
          heading: "bvn",
          value: userData?.profile.bvn,
        },
        {
          heading: "gender",
          value: userData?.profile.gender,
        },
        {
          heading: "marital status",
          value: userData?.profile?.maritalStatus ?? "N/A",
        },
        {
          heading: "children",
          value: userData?.profile?.children ?? "N/A",
        },
        {
          heading: "type of  residence",
          value:
            userData?.profile?.typeOfResidence ?? userData?.profile.address,
        },
      ],
    },
    {
      title: "Education and Employment",
      details: [
        {
          heading: "level of education",
          value: userData?.education.level,
        },
        {
          heading: "employment status",
          value: userData?.education.employmentStatus,
        },
        {
          heading: "sector of employment",
          value: userData?.education.sector,
        },
        {
          heading: "duration  of employment",
          value: userData?.education.duration,
        },
        {
          heading: "office email",
          value: userData?.education.officeEmail,
        },
        {
          heading: "monthly income",
          value: `₦${userData?.education.monthlyIncome[0]} - ₦${userData?.education.monthlyIncome[1]}`,
        },
        {
          heading: "loan  repayment",
          value: `₦${userData?.education.loanRepayment}`,
        },
      ],
    },

    {
      title: "Socials",
      details: [
        {
          heading: "twitter",
          value: userData?.socials.twitter,
        },
        {
          heading: "facebook",
          value: userData?.socials.facebook,
        },
        {
          heading: "instagram",
          value: userData?.socials.instagram,
        },
      ],
    },
    {
      title: "Guarantor",
      details: [
        {
          heading: "full  name",
          value: `${userData?.guarantor.firstName} ${userData?.guarantor.lastName}`,
        },
        {
          heading: "phone number",
          value: userData?.guarantor.phoneNumber,
        },
        {
          heading: "email address",
          value: userData?.guarantor.email ?? "N/A",
        },

        {
          heading: "relationship",
          value: userData?.guarantor?.lastName,
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className={style["details--container"]}>
        <div className={style["go--back"]} onClick={() => navigate(-1)}>
          <span>
            <img src={back} alt="back-arrow" />
          </span>
          Back to Users
        </div>
        <div className={style["details--container__header"]}>
          <div className={style["title"]}>User Details</div>
          <div className={style["action--buttons"]}>
            {" "}
            <Button
              className="small--ghost"
              type="button"
              onClick={() => toggleActionModal("Blacklist")}
            >
              BLACKLIST USER
            </Button>
            <Button
              className="small--ghost"
              type="button"
              onClick={() => toggleActionModal("Activate")}
            >
              ACTIVATE USER
            </Button>
          </div>
        </div>
        <div className={style["details--container__info"]}>
          <div className={style["user--details"]}>
            <div className={style["profile"]}>
              <div className={style["picture"]}>
                <img
                  src={
                    userData?.profile?.avatar ? userData?.profile?.avatar : user
                  }
                  alt="user"
                />
              </div>
              <div className={style["username"]}>
                <p className={style["name"]}>
                  {userData?.profile?.firstName} {userData?.profile?.lastName}
                </p>
                <p className={style["account-number"]}>{userData?.userName}</p>
              </div>
            </div>
            <div className={style["user--rate"]}>
              <p>User's Tier</p>

              <div className="rating">
                <img src={filled_star} alt="filled-star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>
            <div className={style["user--amount"]}>
              <p className={style["balance"]}>₦{userData?.accountBalance}</p>
              <p className={style["account-number"]}>
                {userData?.accountNumber}
              </p>
            </div>
          </div>
          <div className={style["tabs"]}>
            {tabs.map((tab, index) => (
              <div
                onClick={() => handleTabChange(tab)}
                className={
                  currentTab === tab ? style["active--tab"] : style["tab"]
                }
                key={index}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>
        <div className={style["details--container__data"]}>
          {loading
            ? "Loading"
            : currentTab === "General Details" &&
              userDetails.map((user, index) => (
                <div className={style["personal--info"]} key={index}>
                  <p className={style["title"]}>{user.title}</p>
                  <div className={style["details"]}>
                    {user.details.map((item, index) => (
                      <div className="details-col" key={index}>
                        <p className={style["title"]}>{item.heading}</p>
                        <p className={style["value"]}>{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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

const tabs = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "    App and Settings",
];

export default UserDetails;
