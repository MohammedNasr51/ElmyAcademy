import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import homeBg from "../assets/home-bg.png";
import circleArrow from "../assets/feather_arrow-left-circle.svg";
export default function MainSlider() {
//   const styles = `
//   .swiper{
//     position: relative;
//   }
//   .swiper-pagination {
//     position: absolute;
//     right: 10px;
//     top: 0px;
//     transform: translateY(-50%);
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
//   }
//   .swiper-pagination-bullet {
//     width: 12px;
//     height: 12px;
//     background-color: #ccc;
//     opacity: 1;
//   }
//   .swiper-pagination-bullet-active {
//     background-color: #601596;
//   }
// `;
  return (
    <>
      {/* <style>{styles}</style> */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <div className=" flex items-center justify-center w-full">
            <div>
              <img src={homeBg} alt="Slide 1" />
            </div>
            <div dir="rtl">
              <h1 className="text-3xl text-primary-purble my-5">
                أجعل حياتك أفضل بجعل نفسك أفضل
              </h1>
              <p className="text-lg font-bold my-5">
                بيئتك المثالية لتطوير مهاراتك مع نخبة الخبراء وأقوى المحتويات
                التعليمية.
              </p>
              <div className="flex items-center gap-4">
                <Link className=" group overflow-x-hidden outline-none text-white py-2 px-6 rounded-full bg-gradient-to-l from-dark-purble via-primary-purble to-dark-purble">
                  <p className="transition-transform duration-500 group-hover:translate-x-0 -translate-x- ">
                    سجل الآن
                  </p>
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
          <div className=" flex items-center justify-center w-full">
            <div>
              <img src={homeBg} alt="Slide 1" />
            </div>
            <div dir="rtl">
              <h1 className="text-3xl text-primary-purble my-5">
                أجعل حياتك أفضل بجعل نفسك أفضل
              </h1>
              <p className="text-lg font-bold my-5">
                بيئتك المثالية لتطوير مهاراتك مع نخبة الخبراء وأقوى المحتويات
                التعليمية.
              </p>
              <div className="flex items-center gap-4">
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
      </Swiper>
    </>
  );
}
