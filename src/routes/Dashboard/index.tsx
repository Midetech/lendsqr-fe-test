import React from "react";
import Layout from "../../components/Layout";
import style from "./index.module.scss";

const Dashboard = () => {
  return (
    <div className={style["dashboard--container"]}>
      <Layout></Layout>
    </div>
  );
};

export default Dashboard;
