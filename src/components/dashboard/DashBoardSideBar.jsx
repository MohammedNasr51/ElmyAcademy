import { t } from "i18next";
import userIcon from "../../assets/user-icon.svg";
import bookMarkIcon from "../../assets/dashboard-book-mark.svg";
import awardIcon from "../../assets/feather_award.svg";
import openBookIcon from "../../assets/feather_book-open.svg";
import logoutIcon from "../../assets/logout-icon.svg";
import homeIcon from "../../assets/dashboard-home.svg";
import { Link } from "react-router";
import { useState } from "react";

export default function DashBoardSideBar() {
  const [isActive, setIsActive] = useState('');
  const handleActiveLink = (link) => {
    setIsActive(link);
  };
  return (
    <div className="hidden sticky top-20 md:flex flex-col items-center border-2 border-t-primary-purble border-l-primary-purble border-b-blue-700 border-r-blue-700 rounded-md p-4 mt-14 w-[30rem] lg:w-[15rem] h-fit">
      <div className="flex flex-col items-center p-4">
        <img src={userIcon} alt="user icon" className="size-20 mb-2" />
        <p className="text-gray-500 text-sm">
          {`${t("dashboard.sidebar.greeting")}
          ${t("dashboard.sidebar.username")}`}
        </p>
      </div>

      <ul className="flex items-center justify-between text-xs text-gray-500 font-semibold">
        <li className="p-1 mx-0.5">
          {`${t("dashboard.sidebar.signed")} 
          0 ${t("dashboard.sidebar.courses")} `}{" "}
        </li>

        <li className="p-1 mx-0.5">{t("dashboard.sidebar.certificate")}</li>
      </ul>

      <ul className="text-gray-500 flex flex-col justify-start">
        {[
          { item: "dashboard", img: homeIcon },
          { item: "myCourses", img: openBookIcon },
          { item: "favorites", img: bookMarkIcon },
          { item: "accountSettings", img: awardIcon },
          { item: "logout", img: logoutIcon },
        ].map(({ item, img }) => (
          <li key={item} className="">
            <Link
              to={`${item === "dashboard" ? "main" : item}`}
              className={`flex items-center gap-2 my-2 hover:text-primary-purble cursor-pointer font-semibold ${
                isActive == item ? "text-primary-purble" : "text-gray-500"
              }`}
              onClick={() => handleActiveLink(item)}
            >
              <img
                src={img}
                alt={`${item} icon`}
                className="size-5 text-gray-800"
              />
              {t(`dashboard.sidebar.${item}`)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
