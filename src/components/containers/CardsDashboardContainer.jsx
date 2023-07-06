import CardDashboard from "../partials/CardDashboard";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import instagram from "../../assets/icon-instagram.svg";
import youtube from "../../assets/icon-youtube.svg";

const CardsDashboardContainer = () => {
  return (
    <div className="mt-12 flex flex-col gap-6">
      <CardDashboard logo={facebook} username={"@makkudev"} followers={1233} />

      <CardDashboard logo={twitter} username={"@makkudev"} followers={1233} />

      <CardDashboard logo={instagram} username={"@makkudev"} followers={1233} />

      <CardDashboard
        logo={youtube}
        username={"@makkudev"}
        followers={1233}
        subs={true}
      />
    </div>
  );
};

export default CardsDashboardContainer;
