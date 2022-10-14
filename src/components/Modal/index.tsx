import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import Backdrop from "../Backdrop";
import { CSSTransition } from "react-transition-group";
import style from "./index.module.scss";

interface Props {
  toggleModal?: Function;
  isOpen: boolean;
  children: ReactNode;
}

const ModalOverlay = (props: Props) => {
  const content = (
    <div className={style["modal"]}>
      <div className={style[`modal__content`]}>{props.children}</div>
    </div>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("modal-hook") as HTMLElement
  );
};

const Modal = (props: Props) => {
  return (
    <>
      {props.isOpen ? <Backdrop onClick={props.toggleModal}></Backdrop> : ""}

      <CSSTransition
        in={props.isOpen}
        mountOnEnter
        unmountOnExit
        timeout={50}
        classNames="modal"
      >
        <ModalOverlay {...props}></ModalOverlay>
      </CSSTransition>
    </>
  );
};

export default Modal;
