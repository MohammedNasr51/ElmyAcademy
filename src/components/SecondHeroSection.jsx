import PropTypes from "prop-types";

export default function SecondHeroSection({ bgImg, otherImg }) {
  return (
    <section
      className="relative w-full h-[70vh] flex items-center justify-center px-6 md:px-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-contain bg-center opacity-60 mx-auto h-full w-full flex justify-center">
        <img src={otherImg} alt="" className="h-[95%] mt-auto object-cover" />
      </div>

      <div className="relative max-w-6xl w-full flex flex-col md:flex-row items-center justify-center">
        <div className="my-10 space-y-6 text-white text-center md:text-left relative">
          <div className=" w-full flex items-center justify-center md:justify-end ">
            <div className="text-right max-w-1/2  bg-transparent bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 p-4 rounded-xl">
              <h2 className="text-xl font-bold">لماذا منصة علمي؟</h2>
              <p className="text-sm md:text-base">
                منصة علمي توفر محتوى تعليميًا إلكترونيًا يشمل مسابقات ودورات
                تغطي مختلف المجالات، لمساعدة الطلاب في التطوير المهاري والتفوق
                الأكاديمي.
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-center md:justify-start ">
            <div className="text-right max-w-1/2   bg-transparent bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 p-4 rounded-xl">
              <h2 className="text-xl font-bold">مواد تدريبية مرنة</h2>
              <p className="text-sm md:text-base">
                تقدم منصة علمي دورات متعددة، تشمل البرمجة والتسويق، مع مواد مرنة
                تناسب جميع المستويات.
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-center md:justify-end ">
            <div className="text-right max-w-1/2   bg-transparent bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 p-4 rounded-xl">
              <h2 className="text-xl font-bold">تعلم من أي مكان</h2>
              <p className="text-sm md:text-base">
                مع منصة علمي، يمكنك التعلم عبر الإنترنت بسهولة، وتوسيع مهاراتك
                بلا حدود.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
SecondHeroSection.propTypes = {
  bgImg: PropTypes.string.isRequired,
  otherImg: PropTypes.string,
};
