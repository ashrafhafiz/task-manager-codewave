import React, { Fragment, useRef, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSidebar } from "../slices/authSlice";
import clsx from "clsx";
import { IoMdClose } from "react-icons/io";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
  // My Approtch
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // delete my approch above
  //
  // const isSidebarOpen = true;
  // const isSidebarOpen = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const mobileMenuRef = useRef(null);

  const handleCloseSidebar = () => {
    // dispatch(setOpenSidebar(false));
    setIsSidebarOpen(false);
  };
  return (
    <>
      <Transition
        show={isSidebarOpen}
        as={Fragment}
        enter="transition-opacity duration-700"
        enterFrom="opacity-x-10"
        enterTo="opacity-x-100"
        leave="transition-opacity duration-700"
        leaveFrom="opacity-x-100"
        leaveTo="opacity-x-0"
      >
        {(ref) => (
          <div
            ref={(node) => (mobileMenuRef.current = node)}
            className={clsx(
              "w-full h-full transition-all duration-700 transform md:hidden bg-black/40",
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            )}
            onClick={() => handleCloseSidebar()}
          >
            <div className="w-2/4 h-full bg-white">
              <div className="flex justify-end px-5 py-2 w-full">
                <button
                  onClick={() => handleCloseSidebar()}
                  className="flex justify-end items-end cursor-pointer"
                >
                  <IoMdClose size={25} />
                </button>
              </div>

              <div className="-mt-10">
                <Sidebar />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default MobileSidebar;
