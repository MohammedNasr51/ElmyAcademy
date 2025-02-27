import PropTypes from "prop-types";
import bookIcon from "../assets/feather_book.svg";
import playIcon from "../assets/feather_play.svg";
import bookMarkIcon from "../assets/feather_bookmark.svg";
import { Link } from "react-router";

export default function Course({ title, img, price, lessons, videos }) {
  return (
    <div className="mx-auto rounded-2xl border-2 border-primary-purble flex flex-col">
      <img src={img} alt={title} className="w-full"/>
      <h2 className="py-4 px-3 font-bold text-right">{title}</h2>
      <div className="flex justify-between items-center">
        <p className="flex items-center py-3 px-3 text-primary-purble">
          <span className="text-black pe-2">{videos}</span>
          : فيديوهات
          <img src={playIcon} alt="play icon" className="px-2"/>
        </p>
        <p className="flex items-center py-3 px-3 text-primary-purble">
          <span className="text-black pe-2">{lessons}</span>
          : دروس
          <img src={bookIcon} alt="book icon" />
        </p>
      </div>
      <div className="mt-auto">
        <p className="flex items-center justify-end py-3 px-4">
          ريال
          <span className="px-2 text-primary-purble font-semibold text-lg">
            {price}
          </span>
        </p>
        <p className="flex items-center justify-between py-3 px-4">
          <img
            src={bookMarkIcon}
            alt="bookmark icon"
            className="p-2 border rounded-full border-dark-purble"
          />
          <Link className="py-2 px-3 bg-gradient-to-l from-dark-purble via-primary-purble to-dark-purble text-white rounded-full">
            معرفة المزيد
          </Link>
        </p>
      </div>
    </div>
  );
}

Course.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  lessons: PropTypes.number.isRequired,
  videos: PropTypes.number.isRequired,
};
