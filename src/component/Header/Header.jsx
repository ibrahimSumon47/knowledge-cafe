import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between mt-10 border-b border-slate-300 p-5">
        <h2 className="text-5xl font-bold ">Knowledge Cafe</h2>
        <img
          className="h-14 w-14 rounded-full"
          src="../../../image/header.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
