import React, { ReactNode } from "react";
import style from "./index.module.scss";

interface Props {
  children: ReactNode;
  className: string;
  type: any;
  disabled?: boolean;
}

function Button({ type, className, children, disabled, ...props }: Props) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${style[className]}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
