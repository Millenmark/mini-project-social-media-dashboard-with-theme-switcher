import { useContext } from "react";
import { ToggleContext } from "../../context/ToggleContext";

const Toggle = () => {
  const { isToggleActive, handleToggleActive } = useContext(ToggleContext);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center cursor-pointer z-30 pt-4">
      <div className="flex justify-between w-full items-center">
        <span className=" text-light-text dark:text-dark-text text-sm font-bold">
          Dark Mode
        </span>
        <div
          className={` w-14 h-7 flex items-center bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end rounded-full px-1 ${
            isToggleActive ? "bg-cyan-700" : " bg-light-toggle"
          }`}
          onClick={handleToggleActive}
        >
          {/* Switch */}
          <div
            className={`bg-white w-5 h-5 transition-all duration-300 rounded-full shadow-md transform ${
              isToggleActive ? "translate-x-7" : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
