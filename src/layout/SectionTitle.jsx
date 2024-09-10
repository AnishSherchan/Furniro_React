/* eslint-disable react/prop-types */
const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section--title">
      <h2 className="text--h2">{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
