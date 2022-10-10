import React from "react";
import style from "./index.module.scss";
import logoIcon from "../../assets/icons/logo.svg";
import lendsqr from "../../assets/icons/lendsqr.svg";
import search from "../../assets/icons/search.svg";
import notification from "../../assets/icons/notification.svg";

import avatar from "../../assets/images/avatar.svg";

const Header = () => {
  return (
    <div className={style["header--container"]}>
      <div className={style["header--container__logo"]}>
        <img src={logoIcon} alt="lendsqr-union" />
        <img src={lendsqr} alt="lendsqr-text" />
      </div>
      <div className={style["header--container__search"]}>
        <input type="text" placeholder="Search for anything" />
        <button type="button">
          <img src={search} alt="search-icon" />
        </button>
      </div>
      <div className={style["header--container__settings"]}>
        <a href="http://"> Docs</a>
        <img
          src={notification}
          alt="notification-icon"
          className={style["notification"]}
        />
        <img src={avatar} alt="avatar-icon" className={style["avatar"]} />
        <p className={style["user"]}>Adedeji</p>
      </div>
    </div>
  );
};

export default Header;
