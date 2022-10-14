import React, { ReactNode } from "react";
import style from "./index.module.scss";

interface Props {
  children: ReactNode;
  className: string;
  type: any;
  disabled?: boolean;
  onClick?: any;
}

function Button({
  type,
  className,
  children,
  disabled,
  onClick,
  ...props
}: Props) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${style[className]}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
