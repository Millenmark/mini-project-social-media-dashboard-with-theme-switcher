/* eslint-disable react/prop-types */
const CardDashboard = ({ logo, username, followers, subs, className }) => {
  return (
    <div className=" bg-light-card-bg dark:bg-dark-card-bg flex flex-col justify-center items-center rounded-lg overflow-hidden">
      <div className={`w-full h-1 ${className}`}></div>
      <div className="flex justify-center items-center gap-3 my-5">
        <img src={logo} alt="" /> {username}
      </div>
      <div className="my-5 flex flex-col items-center justify-center">
        <span className=" text-6xl font-bold">{followers}</span>
        <p className=" tracking-[0.45em] uppercase">
          {subs ? "subscribers" : "followers"}
        </p>
      </div>
    </div>
  );
};

export default CardDashboard;
