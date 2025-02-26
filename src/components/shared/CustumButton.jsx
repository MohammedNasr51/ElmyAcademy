import PropTypes from "prop-types";

export default function CustumButton({ children }) {
  return (
    <button
      disabled
      className="bg-gradient-to-r from-light-purble to-lighter-purble  px-6 py-5 rounded-2xl hover:animate-popup transition-all duration-200 delay-75"
    >
      {children}
    </button>
  );
}

CustumButton.propTypes = {
  children: PropTypes.node.isRequired,
};
