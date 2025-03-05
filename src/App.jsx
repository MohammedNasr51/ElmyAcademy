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
import TrainerMain from "./components/dashboard/TrainerMain";
import TrainerMyCourses from "./components/dashboard/TrainerMyCourses";
import OrdersProfits from "./components/dashboard/OrdersProfits";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashBoard />}>
              <Route path="student/main" element={<Main />} />
              <Route path="student/myCourses" element={<MyCourses />} />
              <Route path="student/favorites" element={<Favorites />} />
              <Route path="student/accountSettings" element={<></>} />
              <Route path="student/logout" element={<></>} />
              <Route path="trainer/main" element={<TrainerMain />} />
              <Route path="trainer/main/courses" element={<TrainerMyCourses/>} />
              <Route path="trainer/courses" element={<TrainerMyCourses/>} />
              <Route path="trainer/ordersProfits" element={<OrdersProfits/>} />
              <Route path="trainer/accountSettings" element={<></>} />
              <Route path="trainer/logout" element={<></>} />
              
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </I18nextProvider>
  );
}

export default App;
