import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [active, setActive] = useState("الرئيسية");

  const handleSetActive = (item) => {
    setActive(item);
  };

  return (
    <ul className="flex flex-col md:flex-row items-center justify-center gap-4">
      {["الرئيسية", "كيف نعمل", "التسجيل كمدرب", "تواصل معنا"].map((item) => (
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
      ))}
    </ul>
  );
}
