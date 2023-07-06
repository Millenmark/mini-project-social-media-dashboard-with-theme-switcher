/* eslint-disable react/prop-types */
const CardDashboard = ({ logo, username, followers, subs }) => {
  return (
    <div className=" bg-light-card-bg dark:bg-dark-card-bg flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-3">
        <img src={logo} alt="" /> {username}
      </div>
      <div>
        <span className=" text-6xl">{followers}</span>
        <p className="">{subs ? "subscribers" : "followers"}</p>
      </div>
    </div>
  );
};

export default CardDashboard;
