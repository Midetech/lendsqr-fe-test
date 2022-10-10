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
    // <div>
    <button
      type={type}
      disabled={disabled}
      className={`${style[className]}`}
      {...props}
    >
      {children}
    </button>
    // </div>
  );
}

export default Button;
