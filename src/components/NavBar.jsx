import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import visionLogo from "../assets/vision-logo.svg";
import gridIcon from "../assets/feather_grid.svg";
import globeIcon from "../assets/globe.svg";
import menuIcon from "../assets/menu-icon.svg";
import logo from "../assets/logo.svg";
import searchIcon from "../assets/search.svg";
import cartIcon from "../assets/cart-icon.svg";
import ringIcon from "../assets/ring-icon.svg";
import userIcon from "../assets/user-icon.svg";
import dropdownArrowIcon from "../assets/feather_chevron-down.svg";
export default function NavBar() {
  const [active, setActive] = useState("الرئيسية");
  const [hoveredGroup, setHoveredGroup] = useState("");
  const [categoryHovered, setCategoryHovered] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setSidebarOpen } = useContext(AuthContext);

  const handleSetActive = (item) => {
    setActive(item);
  };
  const handleClickedDropDown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <nav
      dir="rtl"
      className="sticky flex items-center justify-between bg-stone-50 py-3 px-5 rounded-full top-0 z-50"
    >
      <ul className="flex items-center gap-4">
        <li>
          <img src={logo} alt="elmy logo" />
        </li>
        <li className="hidden md:flex">
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
        <ul className="flex flex-col md:flex-row items-center justify-center gap-4">
          {["الرئيسية", "كيف نعمل", "التسجيل كمدرب", "تواصل معنا"].map(
            (item) => (
              <li
                key={item}
                className={`py-2 mx-1 px-4 rounded-full cursor-pointer ${
                  active === item
                    ? "text-primary-purble bg-gray-100"
                    : "hover:text-primary-purble hover:bg-gray-100"
                }`}
                onClick={() => handleSetActive(item)}
              >
                <Link to="/">{item}</Link>
              </li>
            )
          )}
        </ul>
      </div>

      <ul className="hidden lg:flex items-center justify-between gap-5">
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
        {/* <li>
            <Link>تسجيل دخول</Link>
          </li> */}
        <li>
          <Link className="flex items-center ">
            <img src={cartIcon} alt="cart icon" />
          </Link>
        </li>
        <li>
          <Link className="flex items-center ">
            <img src={ringIcon} alt="ring icon" />
          </Link>
        </li>
        <li>
          <button onClick={handleClickedDropDown} className="flex items-center relative">
            <img src={userIcon} alt="user icon" />
            <span className="ms-2">user name</span>
            <img src={dropdownArrowIcon} alt="dropdown arrow icon" />
            <ul
              className={`${
                isDropdownOpen ? "opacity-100" : "opacity-0"
              } transition-opacity delay-75 duration-150 ease-in absolute top-10 left-0 bg-gray-200 shadow-md rounded-md p-2`}
            >
              <li className="py-1 px-2 w-full rounded-sm hover:text-primary-purble/80">
                <Link>تسجيل الخروج</Link>
              </li>
            </ul>
          </button>
        </li>
      </ul>
    </nav>
  );
}
