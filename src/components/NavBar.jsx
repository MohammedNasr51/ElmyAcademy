import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <ul className="flex items-center justify-center gap-4">
      <li className="py-2 mx-1 px-4 rounded-full hover:text-primary-purble hover:bg-gray-100">
        <Link>الرئيسية</Link>
      </li>
      <li className="py-2 mx-1 px-4 rounded-full hover:text-primary-purble hover:bg-gray-100">
        <Link>كيف نعمل</Link>
      </li>
      <li className="py-2 mx-1 px-4 rounded-full hover:text-primary-purble hover:bg-gray-100">
        <Link>التسجيل كمدرب</Link>
      </li>
      <li className="py-2 mx-1 px-4 rounded-full hover:text-primary-purble hover:bg-gray-100">
        <Link>تواصل معنا</Link>
      </li>
    </ul>
  );
}
