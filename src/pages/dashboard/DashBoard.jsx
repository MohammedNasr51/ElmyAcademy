import DashboardLayout from "../../layouts/DashboardLayout";
import DashBoardSideBar from "../../components/dashboard/DashBoardSideBar";
import { Outlet } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function DashBoard() {
  const { secondDashboardSubTitle, dashBoardTitle,firstDashBoardSubTitle } = useContext(AuthContext);
  return (
    <DashboardLayout>
      <header
        dir="rtl"
        className="flex flex-col justify-center items-center h-[100px] bg-gradient-to-t from-amber-100 to-amber-50"
      >
        <h1 className="text-xl m-5">{dashBoardTitle}</h1>
        <p className="flex text-sm text-gray-500">
          <span className="text-gray-600 font-semibold mx-2">
            {" "}
            {` .  ${firstDashBoardSubTitle}`}{" "}
          </span>
          <span> {` .  ${secondDashboardSubTitle}`} </span>
        </p>
      </header>
      <section
        dir="rtl"
        className="flex flex-row container min-h-screen mx-auto"
      >
        <DashBoardSideBar />
        <Outlet />
      </section>
    </DashboardLayout>
  );
}
