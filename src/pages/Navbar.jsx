import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaRegWindowClose,
  FaSearch,
  FaLaptopHouse,
  FaBriefcaseMedical,
  FaAngleDown,
  FaHandHoldingMedical,
} from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleToggle = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[270px] overflow-y-auto text-center bg-gray-900">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <h1 className="h-12 text-center p-2 font-bold text-xl bg-gradient-to-l from-transparent to-[#edeae5]">
              Insu@tech
            </h1>
            <FaRegWindowClose className="cursor-pointer ml-28 lg:hidden" />
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <FaSearch className="text-sm" />
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <FaLaptopHouse />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            <Link to="/">Home</Link>
          </span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <FaBriefcaseMedical />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Claims
          </span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px]"></div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          onClick={handleToggle}
        >
          <FaHandHoldingMedical />
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Insurance Products
            </span>
            <span
              className={`text-sm ${openSidebar ? "rotate-180" : "rotate-0"}`}
              id="arrow"
            >
              <FaAngleDown />
            </span>
          </div>
        </div>
        {openSidebar && (
          <div
            className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
            id="submenu"
          >
            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
              Group Medical
            </h1>
            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
              Term Life
            </h1>
            <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
              Accidental Death
            </h1>
          </div>
        )}
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <IoMdLogOut />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            <Link to="/login">Logout</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
