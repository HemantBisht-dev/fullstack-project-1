import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCreate } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { useProductStore } from "../store/product";

function Navbar() {
  const [isDark, setisDark] = useState(false);

  function changeTheme() {
    setisDark(!isDark);
  }

  return (
    <div className="max-w-7xl m-auto p-4 flex justify-between ">
      <div>
        <Link to="/">
          <p className="text-3xl font-bold text-blue-700">
            PRODUCT<span className="text-gray-200">.Pro</span>
          </p>
        </Link>
      </div>
      <div className="space-x-3">
        <Link to="/create">
          <button className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 ">
            <IoCreate />
          </button>
        </Link>

        <button
          className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400"
          onClick={changeTheme}
        >
          {isDark ? <FaRegLightbulb /> : <MdDarkMode />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
