import { Link } from "react-router-dom";
import handIcon from "../assets/hand-emojji.svg.png";
import arowIcon from "../assets/arow.svg";
import { useContext, useState } from "react";
import NavBar from "./NavBar";
import WebsiteSideBar from "./WebsiteSideBar";
import { AuthContext } from "../context/AuthContext";

export default function Header() {
  const [showJoinNow, setShowJoinNow] = useState(true);
  const { sidebarOpen } = useContext(AuthContext);

  return (
    <header dir="rtl" className="bg-white relative w-full">
      {showJoinNow && (
        <div className="rounded-full my-3 py-2 bg-primary-purble text-white flex items-center justify-between px-5">
          <div className="w-full flex items-center justify-center ">
            <span className="items-center hidden md:flex">
              هل لديك أهداف كبيرة؟ لدينا دورات لتتناسبك
              <img src={handIcon} alt="hand icon" className="mx-3" />
            </span>
            <Link className="flex items-center animate-popup">
              إشترك الآن <img src={arowIcon} alt="" className="mx-3" />
            </Link>
          </div>
          <button
            onClick={() => setShowJoinNow(false)}
            className="text-white rounded-full size-6 transition duration-200 ease-in-out delay-75 hover:text-primary-purble hover:bg-white"
          >
            x
          </button>
        </div>
      )}
      <NavBar />
      {sidebarOpen && <WebsiteSideBar />}
    </header>
  );
}
