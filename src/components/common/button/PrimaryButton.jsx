/* eslint-disable react/prop-types */
const PrimaryButton = ({ title, handleClick, type, disabled }) => {
  return (
    <button
      className="primary-btn"
      type={type || ""}
      disabled={disabled || ""}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
