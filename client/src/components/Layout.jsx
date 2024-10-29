import { useSelector } from "react-redux";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MobileSidebar from "./MobileSidebar";

const Layout = () => {
  const user = true;
  // const user = useSelector((state) => state.auth.user);
  const location = useLocation();

  return user ? (
    <div className="flex flex-col w-full h-screen md:flex-row">
      <div className="sticky top-0 hidden w-1/5 h-screen bg-white md:block">
        <Sidebar />
      </div>

      <MobileSidebar />
      <div className="flex-1 overflow-y-auto">
        <Navbar />
        <div className="p-4 2xl:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" state={{ form: location }} replace />
  );
};

export default Layout;
