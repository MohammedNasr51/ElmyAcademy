import { t } from "i18next";
import PropTypes from "prop-types";
import classNames from "classnames";

const colorClasses = {
  "primary-purble": "bg-primary-purble/50 text-primary-purble",
  "dark-purble": "bg-dark-purble/50 text-dark-purble",
  "lighter-purble": "bg-lighter-purble/50 text-lighter-purble",
  "light-purble": "bg-light-purble/50 text-light-purble",
  "custom-blue": "bg-custom-blue/50 text-custom-blue",
  "custom-purble": "bg-custom-purble/50 text-custom-purble",
};

export default function ProgressBox({ icon, color, title, count }) {
  const colorClass = colorClasses[color] || "";

  return (
    <div
      className={classNames(
        `flex flex-col justify-center items-center py-8 px-12 w-64 rounded-2xl`,
        colorClass
      )}
    >
      <div
        className={classNames(
          `w-16 h-16 rounded-full flex justify-center items-center m-2`,
          {
            [`bg-${color}/50`]: color,
          }
        )}
      >
        <img src={icon} alt={icon} />
      </div>
      <p className="font-bold text-5xl m-2">00</p>
      <p>{t(title)}</p>
    </div>
  );
}

ProgressBox.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
