import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between mt-10 border-b border-slate-300 p-5">
        <h2 className="text-5xl font-bold ">Knowledge Cafe</h2>
        <img
          className="h-14 w-14 rounded-full"
          src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.1.711394428.1680199164&semt=sph"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
