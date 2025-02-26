import PropTypes from "prop-types";
import CustumButton from "./shared/CustumButton";
export default function HeroSection({ bgImg, otherImg }) {
  return (
    <section
      className="w-full h-[70vh] bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="h-full flex items-center justify-center px-4 gap-6 ">
        {otherImg && <img src={otherImg} alt="" className="h-[95%] mt-auto" />}
        <div>
          <h2 className="text-white text-3xl text-right my-6">
            لماذا تختار علمي ؟
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              "مرونة الوقت والمكان",
              "خبرة المدربين",
              "أسعار منافسة",
              "تشكيلة واسعة من الدورات",
            ].map((item) => {
              return <CustumButton key={item}>{item}</CustumButton>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  bgImg: PropTypes.string.isRequired,
  otherImg: PropTypes.string,
};
