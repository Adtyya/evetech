import React, { FC } from "react";

interface Component {
  children: String;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<Component> = ({ children, onClick }) => {
  console.log("render");
  return (
    <>
      <button
        className="bg-slate-900 opacity-50 px-4 py-1 text-white rounded"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default React.memo(Button);
