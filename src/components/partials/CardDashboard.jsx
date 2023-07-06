/* eslint-disable react/prop-types */
const CardDashboard = ({ logo, username, followers, subs }) => {
  return (
    <div>
      <div>
        <img src={logo} alt="" /> {username}
      </div>
      <div>
        {followers}
        <p>{subs ? "subscribers" : "followers"}</p>
      </div>
    </div>
  );
};

export default CardDashboard;
