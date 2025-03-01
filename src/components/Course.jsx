import PropTypes from "prop-types";
import bookIcon from "../assets/feather_book.svg";
import playIcon from "../assets/feather_play.svg";
import bookMarkIcon from "../assets/feather_bookmark.svg";
import starIcon from "../assets/star.png";
import { Link } from "react-router";

export default function Course({
  name,
  image,
  price,
  lessons = 0,
  videos = 0,
  id,
  rating,
  enrollments,
}) {
  return (
    <div className="mx-auto rounded-2xl border-2 border-primary-purble flex flex-col">
      <img src={image} alt={name} className="w-full" />
      <h2 className="py-4 px-3 font-bold text-right">{name}</h2>
      <div className="flex justify-between items-center">
        <p className="flex items-center py-3 px-3 text-primary-purble">
          <span className="text-black pe-2">{videos}</span>
          : فيديوهات
          <img src={playIcon} alt="play icon" className="px-2" />
        </p>
        <p className="flex items-center py-3 px-3 text-primary-purble">
          <span className="text-black pe-2">{lessons}</span>
          : دروس
          <img src={bookIcon} alt="book icon" />
        </p>
      </div>

      <div className="flex justify-between items-center">{/*this is for rating stars and rating number  */}
        <div className="flex items-center justify-start">
          {Array.from({ length: 5 }).map((_, index) => (
            <img
              key={index}
              src={starIcon}
              alt="star"
              className="w-4 h-4"
            />
          ))}
        </div>
        <div className="flex text-gray-400 text-sm">
          <p>
          {`( ${rating} تقييمات )`}
          </p>
        </div>
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
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  lessons: PropTypes.number.isRequired,
  videos: PropTypes.number.isRequired,
};
