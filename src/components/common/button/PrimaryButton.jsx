/* eslint-disable react/prop-types */
const PrimaryButton = ({ title, handleClick }) => {
  return (
    <button className="primary-btn" onClick={handleClick}>
      {title}
    </button>
  );
};

export default PrimaryButton;
