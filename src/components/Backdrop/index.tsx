import React from "react";
import ReactDOM from "react-dom";

import style from "./index.module.scss";
interface Props {
  onClick: any;
}
const Backdrop = (props: Props) => {
  return ReactDOM.createPortal(
    <div className={style["backdrop"]} onClick={props.onClick}></div>,
    document.getElementById("backdrop-hook") as HTMLElement
  );
};

export default Backdrop;
