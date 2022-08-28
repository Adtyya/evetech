import React, { ButtonHTMLAttributes, FC } from "react";

interface Component {
  children: String;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button";
}

const Button: FC<Component> = ({ children, onClick, type }) => {
  console.log("render");
  return (
    <>
      <button
        className="bg-slate-900 opacity-50 px-4 py-1 text-white rounded"
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </>
  );
};

export default React.memo(Button);
