import React from "react";

const Header = () => {
  return (
    <div className="bg-white py-1">
      <div className="navbar flex">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQpy8VLQlXriNmv9T-V7vBQpFSVTd_c9XeQqaudP1Mw&s"
            alt=""
            className="log h-14 my-1 mx-5"
          />
        </div>
        <div>
          <input type="text" placeholder="Search" className="ser bg-gray-200 py-[14px] border-black px-[480px] shadow-inner rounded-md" />
        </div>
        <div className="mx-2">
          <span className="con mx-8">Contact Us</span>
          <button className="butt border-2 px-3 py-2 rounded-md mx-3">Sign Up</button>
          <button className="butt border-2 px-3 py-2 rounded-md">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
