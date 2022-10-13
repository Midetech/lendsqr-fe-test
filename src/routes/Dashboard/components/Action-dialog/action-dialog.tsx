import style from "./index.module.scss";
import viewIcon from "../../../../assets/icons/view.svg";
import deleteIcon from "../../../../assets/icons/delete.svg";
import activateIcon from "../../../../assets/icons/activate.svg";
interface ActionProp {
  handleView: Function;
}

export const ActionDialog = ({ handleView }: ActionProp) => {
  return (
    <div className={style["action--dialog"]}>
      <div className={style["view--user"]} onClick={() => handleView()}>
        <img src={viewIcon} alt="view-icon" />
        <p> View Details</p>
      </div>
      <div className={style["blacklist--user"]}>
        <img src={deleteIcon} alt="view-icon" />
        <p> Blacklist User</p>
      </div>
      <div className={style["activate--user"]}>
        <img src={activateIcon} alt="view-icon" />
        <p>Activate User</p>
      </div>
    </div>
  );
};
