import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import circleArrow from "../assets/feather_arrow-left-circle.svg";
export default function MiniCourse({ title, img }) {
  return (
    <div className="mx-auto rounded-2xl">
      <img src={img} alt={title} className="w-full" />
      <h2 className="py-4 px-3 font-bold text-right my-3">{title}</h2>

      <div className="flex items-center justify-end py-3 px-4">
        <Link className="flex items-center gap-2 text-primary-purble border-2 border-dark-purble rounded-full py-2 px-6">
          <img src={circleArrow} alt="circle arrow" />
          معرفة المزيد
        </Link>
      </div>
    </div>
  );
}

MiniCourse.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
