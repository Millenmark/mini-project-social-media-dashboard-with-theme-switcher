/* eslint-disable react/prop-types */
import upArrow from "../../assets/icon-up.svg";
import downArrow from "../../assets/icon-down.svg";

const CardOverview = ({ title, logo, number, status }) => {
  const { state, percent } = status;

  return (
    <div className="p-8 bg-light-card-bg dark:bg-dark-card-bg rounded-lg">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-normal capitalize font-bold text-light-text dark:text-dark-text">
          {title}
        </h3>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex justify-between items-center">
        <span className="text-4xl font-bold">{number}</span>
        <span>
          <img
            src={state === "up" ? upArrow : downArrow}
            alt={`arrow ${state}`}
          />
          {percent}
        </span>
      </div>
    </div>
  );
};

export default CardOverview;
