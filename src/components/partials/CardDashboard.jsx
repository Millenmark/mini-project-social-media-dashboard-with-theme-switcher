/* eslint-disable react/prop-types */
import downArrow from "../../assets/icon-down.svg";
import upArrow from "../../assets/icon-up.svg";
import { shortenNumber } from "../../utils/utilityFunctions";

const CardDashboard = ({
  logo,
  username,
  followers,
  subs,
  down,
  up,
  className,
}) => {
  return (
    <div className=" bg-light-card-bg dark:bg-dark-card-bg flex flex-col justify-center items-center rounded-lg overflow-hidden pt-3 pb-5 relative">
      <div className={`w-full h-1 ${className} absolute top-0`}></div>
      <div className="flex justify-center items-center gap-3 my-5">
        <img src={logo} alt="" />{" "}
        <p className="font-bold text-sm text-light-text dark:text-dark-text">
          {username}
        </p>
      </div>
      <div className="my-5 flex flex-col items-center justify-center">
        <span className=" text-6xl font-bold mb-1">
          {shortenNumber(followers)}
        </span>
        <p className=" tracking-[0.45em] uppercase text-light-text dark:text-dark-text">
          {subs ? "subscribers" : "followers"}
        </p>
      </div>
      <div className="flex justify-center items-center gap-1">
        <span>
          {(up && <img src={upArrow} alt="arrow up" />) ||
            (down && <img src={downArrow} alt="arrow down" />)}
        </span>
        <span
          className={`${
            up ? "text-lime-green" : "text-bright-red"
          } text-xs font-bold`}
        >
          {up || down} Today
        </span>
      </div>
    </div>
  );
};

export default CardDashboard;
