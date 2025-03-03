import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/website/Home";
import DashBoard from "./pages/dashboard/DashBoard";
import { AuthProvider } from "./context/AuthContext";
import i18n from "./utils/i18n"; // Import i18n config
import { I18nextProvider } from "react-i18next"; // Import I18next
import Main from "./components/dashboard/Main";
import MyCourses from "./components/dashboard/MyCourses";
import Favorites from "./components/dashboard/Favorites";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashBoard />}>
              <Route path="main" element={<Main />} />
              <Route path="myCourses" element={<MyCourses />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="accountSettings" element={<DashBoard />} />
              <Route path="logout" element={<DashBoard />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </I18nextProvider>
  );
}

export default App;
