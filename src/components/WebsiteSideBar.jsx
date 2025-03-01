import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo.svg";
import tickTockIcon from "../assets/ticktock.svg";
import instagramIcon from "../assets/instagram.svg";
import closeIcon from "../assets/close-icon.svg";

export default function SideBar() {
  const { sidebarOpen, setSidebarOpen } = useContext(AuthContext);

  return (
    <div
      className={`fixed inset-0 bg-black/40 bg-opacity-50 z-50 transition-opacity duration-200 ease-in-out ${
        sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setSidebarOpen(false)}
    >
      <div
        className={`sm:w-1/3 w-[90%] fixed top-0 right-0 bg-white h-full z-50 p-4 transform transition-transform duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="py-auto flex items-center justify-between gap-4 border-b border-gray-200 pb-4">
          <li className="flex items-center">
            <Link>
              <img src={logo} alt="elmy logo" className="size-auto" />
            </Link>
          </li>
          <li className="flex items-center">
            <button
              className="flex items-center justify-end w-full"
              onClick={() => setSidebarOpen(false)}
            >
              <img src={closeIcon} alt="close icon" className="size-10" />
            </button>
          </li>
        </ul>
        <ul className="flex flex-col items-start gap-4 mt-20">
          <li className="font-semibold py-1 px-2 w-full rounded-sm hover:text-primary-purble/80 border-b border-gray-200">
            <Link>كيف نعمل</Link>
          </li>
          <li className="font-semibold py-1 px-2 w-full rounded-sm hover:text-primary-purble/80 border-b border-gray-200">
            <Link>التسجيل كمدرب </Link>
          </li>
          <li className="font-semibold py-1 px-2 w-full rounded-sm hover:text-primary-purble/80 border-b border-gray-200">
            <Link>تواصل معنا </Link>
          </li>
        </ul>
        <div className="mt-10 w-[90%] mx-auto">
          <Link className="block text-center text-primary-purble border-2 border-dark-purble rounded-full py-2 px-6">
            اشترك الان
          </Link>
        </div>
        <ul className="flex items-center justify-center lg:justify-end w-[90%] mx-auto mt-6">
          <li className="m-1 mb-0 p-3 rounded-full bg-gray-200">
            <Link to="/">
              <img src={instagramIcon} alt="" />
            </Link>
          </li>
          <li className="m-1 mb-0 p-3 rounded-full bg-gray-200">
            <Link to="/">
              <img src={tickTockIcon} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
