import { t } from "i18next";
import PropTypes from "prop-types";

export default function TrainerProgressBox({ icon, title, count }) {
  return (
    <div
      className={`flex flex-col justify-center items-center py-8 px-12 w-64 rounded-2xl shadow-md`}
      dir="rtl"
    >
      <div
        className={`w-[78px] h-[78px] rounded-full flex justify-center items-center m-2 bg-gray-200`}
      >
        <img src={icon} alt={icon} className="w-[30px] object-contain " />
      </div>
      <p className="font-bold text-3xl m-2">
        {title === "dashboard.mainSection.trainer.totalProfits" && "$"}
        {count}
      </p>
      <p className="font-normal text-gray-500">{t(title)}</p>
    </div>
  );
}

TrainerProgressBox.propTypes = {
  icon: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
