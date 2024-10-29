import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSidebar } from "../slices/authSlice";
import UserAvatar from "./UserAvatar";

const Navbar = () => {
  //   const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-white 2xl:py-4">
      <div className="flex gap-4">
        <button
          className="block text-2xl text-gray-500 md:hidden"
          onClick={() => dispatch(setOpenSidebar(true))}
        >
          <FiAlignJustify />
        </button>

        <div className="w-64 2xl:w-[400px] flex items-center py-2 px-3 gap-2 rounded-full bg-[#f3f4f6]">
          <MdOutlineSearch className="text-xl text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 text-gray-800 bg-transparent outline-none placeholder:text-gray-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* <NotificationPanel /> */}
        <UserAvatar />
      </div>
    </div>
  );
};

export default Navbar;
