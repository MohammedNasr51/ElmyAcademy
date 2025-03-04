import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { t } from "i18next";
import Courses from "../utils/courses";

// Create the context
export const AuthContext = createContext({
  sidebarOpen: false,
  setSidebarOpen: () => {},
  toggleSidebar: () => {},
  acivePageHeader: "",
  setActivePageHeader: () => {},
  setCourses: () => {},
  courses: [],
  secondDashboardSubTitle: "",
  setSecondDashboardSubTitle: () => {},
  dashboardTitle: "",
  setDashboardTitle: () => {},
  setFirstDashBoardSubTitle: () => {},
  firstDashBoardSubTitle: "",
});

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [acivePageHeader, setActivePageHeader] = useState(t("dashboard.main"));
  const [courses, setCourses] = useState(Courses);
  const [secondDashboardSubTitle, setSecondDashboardSubTitle] = useState(
    `${t("dashboard.title")}`
  );
  const [dashBoardTitle, setDashBoardTitle] = useState(
    `${t("dashboard.main")}`
  );
  const [firstDashBoardSubTitle, setFirstDashBoardSubTitle] = useState(
    `${t("dashboard.main")}`
  );

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
  // const toggleBookmark = () => {
  //   setBookmarked((prev) => !prev);
  // };
  return (
    <AuthContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        toggleSidebar,
        acivePageHeader,
        setActivePageHeader,
        setCourses,
        courses,
        secondDashboardSubTitle,
        setSecondDashboardSubTitle,
        dashBoardTitle,
        setDashBoardTitle,
        firstDashBoardSubTitle,
        setFirstDashBoardSubTitle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
