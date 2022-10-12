import React, { ReactNode } from "react";
import Header from "../Header";
import Sidebar from "../SiderBar";
import style from "./index.module.scss";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={style["layout--container"]}>
      <Sidebar />
      <main>
        <Header />

        {children}
      </main>
    </div>
  );
};

export default Layout;
