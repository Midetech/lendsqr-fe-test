import React from "react";
import style from "./index.module.scss";
import { navLinks } from "./nav";
import briefcase from "../../assets/siderbar-icons/briefcase.svg";
import home from "../../assets/siderbar-icons/home.svg";
import next from "../../assets/siderbar-icons/next.svg";
import close from "../../assets/icons/close.svg";
import open from "../../assets/icons/open.svg";
import logoIcon from "../../assets/icons/logo.svg";
import lendsqr from "../../assets/icons/lendsqr.svg";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const [showSideBar, setShowSideBar] = React.useState<boolean>(true);
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    if (width < breakpoint) {
      setShowSideBar(true);
      return;
    }
    setShowSideBar(false);
    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);

  return (
    <div
      className={
        style[showSideBar ? "sidebar--container-hidden" : "sidebar--container"]
      }
    >
      {showSideBar ? (
        <img
          src={open}
          alt="sss"
          className={style["toggle"]}
          onClick={() => setShowSideBar(!showSideBar)}
        />
      ) : (
        <img
          src={close}
          alt="sss"
          className={style["toggle"]}
          onClick={() => setShowSideBar(!showSideBar)}
        />
      )}
      <div
        className={style[showSideBar ? "items" : "sidebar--container__items"]}
      >
        <div className={style["logos"]}>
          <img src={logoIcon} alt="lendsqr-union" />
          <img src={lendsqr} alt="lendsqr-text" />
        </div>
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
