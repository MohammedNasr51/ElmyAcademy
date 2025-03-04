import { t } from "i18next";
import openBookIcon from "../../assets/feather_book-open.svg";
import checkIcon from "../../assets/check-icon.svg";
import logoutIcon from "../../assets/right-arrow.svg";
import homeIcon from "../../assets/dashboard-home.svg";
import settingsIcon from "../../assets/settings-icon.svg";
import { Link } from "react-router";
import PropTypes from "prop-types";

export default function TrainerSideBar({
  setSecondDashboardSubTitle,
  isActive,
  handleActiveLink,
    setDashBoardTitle,
}) {
  function handleClickLink(item) {
    if (item === "courses") {
      setSecondDashboardSubTitle(t(`dashboard.traniderPagesTitle.${item}`));
      setDashBoardTitle(t(`dashboard.traniderPagesTitle.${item}`));
    } else {
      setSecondDashboardSubTitle(t(`dashboard.sidebar.trainer.${item}`));
      setDashBoardTitle(t(`dashboard.sidebar.trainer.${item}`));
    }
  }
  return (
    <div>
      <ul className="text-gray-500 flex flex-col justify-start">
        {[
          { item: "dashboard", img: homeIcon },
          { item: "courses", img: openBookIcon },
          { item: "ordersProfits", img: checkIcon },
          { item: "accountSettings", img: settingsIcon },
          { item: "logout", img: logoutIcon },
        ].map(({ item, img }) => (
          <li key={item} className="" onClick={() => handleClickLink(item)}>
            <Link
              to={`trainer/${item === "dashboard" ? "main" : item}`}
              className={`flex items-center gap-2 my-2 hover:text-primary-purble cursor-pointer ${
                isActive == item ? "text-primary-purble" : "text-gray-500"
              }`}
              onClick={() => handleActiveLink(item)}
            >
              <img
                src={img}
                alt={`${item} icon`}
                className="size-4 text-gray-800"
              />
              {t(`dashboard.sidebar.trainer.${item}`)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
TrainerSideBar.propTypes = {
  setSecondDashboardSubTitle: PropTypes.func.isRequired,
  isActive: PropTypes.string.isRequired,
  handleActiveLink: PropTypes.func.isRequired,
  setDashBoardTitle: PropTypes.func.isRequired,
};
