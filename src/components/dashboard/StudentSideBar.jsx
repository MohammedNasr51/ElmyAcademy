import { t } from "i18next";
import bookMarkIcon from "../../assets/dashboard-book-mark.svg";
import openBookIcon from "../../assets/feather_book-open.svg";
import logoutIcon from "../../assets/logout-icon.svg";
import homeIcon from "../../assets/dashboard-home.svg";
import userIcon from "../../assets/feather_user.svg";
import { Link } from "react-router";
import PropTypes from "prop-types";

export default function StudentSideBar({
  setSecondDashboardSubTitle,
  isActive,
  handleActiveLink,
  setDashBoardTitle,
}) {
  function handleClickLink(item) {
    setSecondDashboardSubTitle(t(`dashboard.sidebar.${item}`));
    setDashBoardTitle(t(`dashboard.sidebar.${item}`));
  }
  return (
    <div>
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
          { item: "accountSettings", img: userIcon },
          { item: "logout", img: logoutIcon },
        ].map(({ item, img }) => (
          <li key={item} className="" onClick={() => handleClickLink(item)}>
            <Link
              to={`student/${item === "dashboard" ? "main" : item}`}
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

StudentSideBar.propTypes = {
  setSecondDashboardSubTitle: PropTypes.func.isRequired,
  isActive: PropTypes.string.isRequired,
  handleActiveLink: PropTypes.func.isRequired,
};
