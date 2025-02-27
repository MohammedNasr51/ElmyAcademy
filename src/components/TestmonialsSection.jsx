import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCards } from "swiper/modules";
import profilePic from "../assets/profile-pic-1.png";
import starIcon from "../assets/star.png";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "محمد عبد الله",
    comment: "تجربة رائعة ومفيدة جداً، أنصح الجميع بتجربتها.",
    img: profilePic,
  },
  {
    id: 2,
    name: "أحمد علي",
    comment: "تعلمت الكثير من الأشياء الجديدة والمفيدة.",
    img: profilePic,
  },
];

export default function TestmonialsSection() {
  return (
    <div className="w-full bg-gray-100">
      {/* Section 1: Tinder-Like Testimonial Slider */}
      <section className="py-20 px-6 flex justify-center w-[90%] mx-auto">
        <div className="w-full flex flex-col lg:flex-row items-center">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Pagination]}
            className="max-w-xs sm:max-w-md"
            pagination={{ clickable: true }}
          >
            {testimonials.map((item) => (
              <SwiperSlide
                key={item.id}
                className="bg-white shadow-lg rounded-xl p-6 lg:p-10 flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-end">
                  <div>
                    <h2 className="px-5">{item.name}</h2>
                    <p className="text-gray-400 text-sm">مهندس</p>
                  </div>
                  <img
                    src={item.img}
                    alt=""
                    className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300"
                  />
                </div>
                <p className="text-gray-600 mt-4 text-right">{item.comment}</p>
                <div className="flex items-center mt-2 justify-end">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      src={starIcon}
                      alt="star"
                      className="w-4 h-4"
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex flex-col items-center lg:items-end justify-center w-full lg:w-1/2 mt-10 lg:mt-0">
            <div className="bg-lighter-purble/40 mb-2 text-primary-purble rounded-full py-2 px-3">
              تعلم اينما كنت
            </div>
            <h2 className="text-2xl font-bold text-gray-800 text-center lg:text-right mb-2">
              كيف يحقق المتعلمون ملكة الفهم؟
            </h2>
            <p className="text-gray-600 text-center md:text-right">
              سواء كنت ترغب في التعلم أو مشاركة ما تعرفه، فقد وصلت إلى المكان
              الصحيح. باعتبارنا وجهة عالمية للتعلم
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end mt-6 w-full text-center lg:text-right">
              <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                <p className="font-semibold text-2xl">30</p>
                <p className="text-gray-500">مدرب مُعتمد</p>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="font-semibold text-2xl">40</p>
                <p className="text-gray-500">مـتدرب</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
