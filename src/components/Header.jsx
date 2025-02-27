import { Link } from "react-router-dom";
import handIcon from "../assets/hand-emojji.svg.png";
import arowIcon from "../assets/arow.svg";
import logo from "../assets/logo.svg";
import visionLogo from "../assets/vision-logo.svg";
import gridIcon from "../assets/feather_grid.svg";
import globeIcon from "../assets/globe.svg";
import searchIcon from "../assets/search.svg";
import menuIcon from "../assets/menu-icon.svg"; // Add a menu icon for the sidebar
import closeIcon from "../assets/close-icon.svg"; // Add a close icon for the sidebar
import { useState } from "react";
import NavBar from "./NavBar";

export default function Header() {
  const [hoveredGroup, setHoveredGroup] = useState("");
  const [categoryHovered, setCategoryHovered] = useState("");
  const [showJoinNow, setShowJoinNow] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header dir="rtl" className="bg-white relative w-full">
      {showJoinNow && (
        <div className="rounded-full my-3 py-2 bg-primary-purble text-white flex items-center justify-between px-5">
          <div className="w-full flex items-center justify-center ">
            <span className="flex items-center hidden md:flex">
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
      <div className="sticky flex items-center justify-between bg-stone-50 py-3 px-5 rounded-full top-20 z-50">
        <ul className="flex items-center gap-4">
          <li>
            <img src={logo} alt="elmy logo" />
          </li>
          <li className= "hidden md:flex">
            <img src={visionLogo} alt="egypt vision 2030 logo" />
          </li>
          <li className="relative transition duration-200 ease-in-out h-10 flex items-center justify-center">
            <button
              className="bg-primary-purble flex py-2 px-4 rounded-full text-white"
              onMouseEnter={() => setCategoryHovered("groupCategories")}
            >
              <img src={gridIcon} alt="grid icon" className="me-2" />
              فئات الدورات
            </button>
            <div
              className={`absolute flex top-18 bg-white p-4 rounded-lg shadow-lg w-fit opacity-0 scale-95 ${
                categoryHovered && "opacity-100 scale-100"
              } transition-all duration-200 ease-in-out delay-75`}
              onMouseLeave={() => setCategoryHovered("")}
            >
              <ul className="py-3 px-2 text-gray-500 font-semibold w-[16rem]">
                <li
                  className="group1 py-1 px-4 w-full rounded-sm transition-all hover:text-primary-purble/80 hover:bg-primary-purble/15"
                  onMouseEnter={() => setHoveredGroup("group1")}
                >
                  <Link>information technology</Link>
                </li>
                <li
                  className="group2 py-1 px-4 w-full rounded-sm transition-all hover:text-primary-purble/80 hover:bg-primary-purble/15"
                  onMouseEnter={() => setHoveredGroup("group2")}
                >
                  <Link> علم البيانات</Link>
                </li>
                <li
                  className="group3 py-1 px-4 w-full rounded-sm transition-all hover:text-primary-purble/80 hover:bg-primary-purble/15"
                  onMouseEnter={() => setHoveredGroup("group3")}
                >
                  <Link> علم البيانات</Link>
                </li>
                <li className="py-1 px-4 w-full rounded-sm transition-all hover:text-primary-purble/80 hover:bg-primary-purble/15">
                  <Link> علم البيانات</Link>
                </li>
                <li className="py-1 px-4 w-full rounded-sm transition-all hover:text-primary-purble/80 hover:bg-primary-purble/15">
                  <Link> علم البيانات</Link>
                </li>
              </ul>
              <div className="w-[16rem] border-r border-gray-200 px-4">
                <ul
                  className={`py-3 px-2 w-full text-gray-500 font-semibold transition-all ${
                    hoveredGroup === "group1" ? "block" : "hidden"
                  }`}
                >
                  <li className="py-1 px-2 w-full rounded-sm hover:text-primary-purble/80">
                    <Link>شبكات</Link>
                  </li>
                  <li className="py-1 px-2 w-full rounded-sm hover:text-primary-purble/80">
                    <Link>لغة الاشارة</Link>
                  </li>
                </ul>
                <ul
                  className={`py-3 px-2 w-full text-gray-500 font-semibold transition-all ${
                    hoveredGroup === "group2" ? "block" : "hidden"
                  }`}
                >
                  <li className="py-1 px-2 w-full rounded-sm hover:text-primary-purble/80">
                    <Link>اساسيات لغه البايثون في علم البيانات</Link>
                  </li>
                </ul>
                <ul
                  className={`py-3 px-2 w-full text-gray-500 font-semibold transition-all ${
                    hoveredGroup === "group3" ? "block" : "hidden"
                  }`}
                >
                  <li className="py-1 px-2 w-full rounded-sm hover:text-primary-purble/80">
                    <Link>شبكات</Link>
                  </li>
                  <li className="py-1 px-2 w-full rounded-sm hover:text-primary-purble/80">
                    <Link>لغة الاشارة</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <button
          className="lg:hidden flex items-center"
          onClick={() => setSidebarOpen(true)}
        >
          <img src={menuIcon} alt="menu icon" className="size-10" />
        </button>
        <div className="hidden lg:flex items-center justify-center gap-4">
          <NavBar />
          <ul className="flex items-center justify-center gap-4">
            <li>
              <Link className="flex items-center gap-2">
                EN
                <img src={globeIcon} alt="" />
              </Link>
            </li>
            <li>
              <button className="flex items-center">
                <img src={searchIcon} alt="" />
              </button>
            </li>
            <li>
              <Link>تسجيل دخول</Link>
            </li>
          </ul>
        </div>
      </div>
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
              <Link  >كيف نعمل</Link>
            </li>
            <li className="font-semibold py-1 px-2 w-full rounded-sm hover:text-primary-purble/80 border-b border-gray-200">
              <Link >التسجيل كمدرب  </Link>
            </li>
            <li className="font-semibold py-1 px-2 w-full rounded-sm hover:text-primary-purble/80 border-b border-gray-200">
              <Link >تواصل معنا </Link>
            </li>
          </ul>
          <div className="mt-10 w-[90%] mx-auto">
            <Link className="block text-center text-primary-purble border-2 border-dark-purble rounded-full py-2 px-6">
            اشترك الان
            </Link>
          </div>
        </div>
        <li>
          <button className="flex items-center">
            <img src={searchIcon} alt="" />
          </button>
        </li>
      </div>
    </header>
  );
}
