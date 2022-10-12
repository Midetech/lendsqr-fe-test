import React from "react";
import style from "./index.module.scss";
import { navLinks } from "./nav";
import briefcase from "../../assets/siderbar-icons/briefcase.svg";
import home from "../../assets/siderbar-icons/home.svg";
import next from "../../assets/siderbar-icons/next.svg";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className={style["sidebar--container"]}>
      <div className={style["sidebar--container__items"]}>
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
