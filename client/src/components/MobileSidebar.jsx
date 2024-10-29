import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSidebar } from "../slices/authSlice";

const MobileSidebar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const mobileMenuRef = useRef(null);

  const handleCloseSidebar = () => {
    dispatch(setOpenSidebar(false));
  };
  return <div>MobileSidebar</div>;
};

export default MobileSidebar;
