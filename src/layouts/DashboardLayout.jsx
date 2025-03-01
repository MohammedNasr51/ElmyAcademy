import PropTypes from "prop-types";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SideBar from "../components/WebsiteSideBar";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function DashboardLayout({ children }) {
  const { sidebarOpen } = useContext(AuthContext);
  return (
    <>
      <NavBar />
      {sidebarOpen && <SideBar />}
      {children}
      <Footer />
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
