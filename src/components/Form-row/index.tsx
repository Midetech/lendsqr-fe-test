import React, { ReactNode } from "react";
import style from "./index.module.scss";

interface Props {
  children: ReactNode;
}

export function FormRow({ children, ...props }: Props) {
  return (
    <div className={style["form__container--row"]} {...props}>
      {children}
    </div>
  );
}
export function FormGroupCustom({ children, ...props }: Props) {
  return (
    <div className={style["form__container--custom"]} {...props}>
      {children}
    </div>
  );
}

export function FormRowGroup({ children, ...props }: Props) {
  return (
    <div className={style["form__row--group"]} {...props}>
      {children}
    </div>
  );
}
export function FormRowCheckbox({ children, ...props }: Props) {
  return (
    <div className={style["form__row--checkbox"]} {...props}>
      {children}
    </div>
  );
}

export function FormRowRadio({ children, ...props }: Props) {
  return (
    <div className={style["form__row--radio"]} {...props}>
      {children}
    </div>
  );
}
