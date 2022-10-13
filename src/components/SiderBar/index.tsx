import React from "react";
import style from "./index.module.scss";
import { navLinks } from "./nav";
import briefcase from "../../assets/siderbar-icons/briefcase.svg";
import home from "../../assets/siderbar-icons/home.svg";
import next from "../../assets/siderbar-icons/next.svg";
import close from "../../assets/icons/close.svg";
import open from "../../assets/icons/open.svg";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const [showSideBar, setShowSideBar] = React.useState<boolean>(true);
  return (
    <div
      className={
        showSideBar
          ? style["sidebar--container"]
          : style["sidebar--container-active"]
      }
    >
      {showSideBar ? (
        <img
          src={close}
          alt="sss"
          className={style["toggle"]}
          onClick={() => setShowSideBar(!showSideBar)}
        />
      ) : (
        <img
          src={open}
          alt="sss"
          className={style["toggle"]}
          onClick={() => setShowSideBar(!showSideBar)}
        />
      )}
      <div
        className={style["sidebar--container__items"]}
        style={{ display: showSideBar ? "block" : "none" }}
      >
        <div className={style["switch"]}>
          <img src={briefcase} alt="sss" />
          <div className={style["link-title"]}>Switch Organization</div>
          <img src={next} alt="sss" />
        </div>
        <div className={style["dashboard"]}>
          <img src={home} alt="sss" />
          <div className={style["link-title"]}>Dashboard</div>
        </div>
        {navLinks.map((item, index) => (
          <div key={index} className={style["item"]}>
            <p className={style["title"]}>{item.title}</p>

            {item.links.map((link, index) => (
              <NavLink
                to={link.url}
                className={
                  location.pathname.includes(link.url)
                    ? style["active"]
                    : style["sidebar--link"]
                }
                key={index}
                onClick={
                  link.title === "Logout"
                    ? () => window.sessionStorage.removeItem("lendsqr_user")
                    : () => console.log(link.title)
                }
              >
                <img src={link.icon} alt="sss" />
                <div className={style["link-title"]}>{link.title}</div>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
