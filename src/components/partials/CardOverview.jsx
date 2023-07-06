/* eslint-disable react/prop-types */
const CardOverview = ({ title, logo, number, status }) => {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <span>{number}</span>
        <span>
          {status.state}
          {status.percent}
        </span>
      </div>
    </div>
  );
};

export default CardOverview;
