import { moreCourses } from "../utils/courses";
import Course from "./Course";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function CoursesSlider() {
  return (
    <div className="my-10 mx-auto ">
      <h3 className="mx-auto w-[16rem] py-2 text-2xl font-bold text-center my-10 text-primary-purble border-b-2 border-primary-purble">
        أكثر الدورات مشاهدة{" "}
      </h3>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ enabled: true }}
        loop={true}
      >
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto my-5">
            {moreCourses.map((course) => (
              <Course key={course.title} {...course} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto my-5">
            {moreCourses.map((course) => (
              <Course key={course.title} {...course} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto my-5">
            {moreCourses.map((course) => (
              <Course key={course.title} {...course} />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
