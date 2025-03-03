import { useTranslation } from "react-i18next";
import DashboardLayout from "../../layouts/DashboardLayout";
import DashBoardSideBar from "../../components/dashboard/DashBoardSideBar";
import { Outlet } from "react-router";

export default function DashBoard() {
  const { t } = useTranslation();
  return (
    <DashboardLayout>
      <header
        dir="rtl"
        className="flex flex-col justify-center items-center h-[100px] bg-gradient-to-t from-amber-100 to-amber-50"
      >
        <h1 className="text-xl m-5">{t("dashboard.title")}</h1>
        <p className="flex text-sm text-gray-500">
          <span className="text-gray-600 font-semibold mx-2">
            {" "}
            {` .  ${t("dashboard.main")}`}{" "}
          </span>
          <span> {` .  ${t("dashboard.title")}`} </span>
        </p>
      </header>
      <section dir="rtl" className="flex flex-row container min-h-screen mx-auto">
        <DashBoardSideBar />
        <Outlet />
      </section>
    </DashboardLayout>
  );
}
