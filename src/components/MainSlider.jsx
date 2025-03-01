import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import homeBg from "../assets/home-bg.png";
import circleArrow from "../assets/feather_arrow-left-circle.svg";
import "swiper/swiper-bundle.css";

export default function MainSlider() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-center w-full p-4">
            <div className="w-full md:w-1/2">
              <img src={homeBg} alt="Slide 1" className="w-full h-auto" />
            </div>
            <div
              dir="rtl"
              className="w-full md:w-1/2 text-center md:text-right p-4"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-purble my-5">
                أجعل حياتك أفضل بجعل نفسك أفضل
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-bold my-5">
                بيئتك المثالية لتطوير مهاراتك مع نخبة الخبراء وأقوى المحتويات
                التعليمية.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link className="outline-none text-white py-2 px-6 rounded-full bg-gradient-to-l from-dark-purble via-primary-purble to-dark-purble">
                  سجل الآن
                </Link>
                <Link className="flex items-center gap-2 text-primary-purble border-2 border-dark-purble rounded-full py-2 px-6">
                  معرفة المزيد
                  <img src={circleArrow} alt="circle arrow" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-center w-full p-4">
            <div className="w-full md:w-1/2">
              <img src={homeBg} alt="Slide 1" className="w-full h-auto" />
            </div>
            <div
              dir="rtl"
              className="w-full md:w-1/2 text-center md:text-right p-4"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-purble my-5">
                أجعل حياتك أفضل بجعل نفسك أفضل
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-bold my-5">
                بيئتك المثالية لتطوير مهاراتك مع نخبة الخبراء وأقوى المحتويات
                التعليمية.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link className="outline-none text-white py-2 px-6 rounded-full bg-gradient-to-l from-dark-purble via-primary-purble to-dark-purble group transform transition-all duration-200 ease-in-out delay-75 hover:-translate-x-full">
                  <span className="transform transition-all duration-200 ease-in-out delay-75 group-hover:-translate-x-full"> سجل الآن</span>
                </Link>
                <Link className="flex items-center gap-2 text-primary-purble border-2 border-dark-purble rounded-full py-2 px-6">
                  معرفة المزيد
                  <img src={circleArrow} alt="circle arrow" />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
