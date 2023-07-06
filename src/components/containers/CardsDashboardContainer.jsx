import CardDashboard from "../partials/CardDashboard";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import instagram from "../../assets/icon-instagram.svg";
import youtube from "../../assets/icon-youtube.svg";

const CardsDashboardContainer = () => {
  return (
    <div className="mt-12 flex flex-col gap-6">
      <CardDashboard
        logo={facebook}
        username={"@makkudev"}
        followers={1987}
        className=" bg-facebook"
        up={12}
      />

      <CardDashboard
        logo={twitter}
        username={"@makkudev"}
        followers={1044}
        className="bg-twitter"
        up={99}
      />

      <CardDashboard
        logo={instagram}
        username={"@makkudev"}
        followers={11234}
        className="bg-gradient-to-r from-instagram-gradient-start to-instagram-gradient-end"
        up={1099}
      />

      <CardDashboard
        logo={youtube}
        username={"@makkudev"}
        followers={1233}
        subs={true}
        className="bg-youtube"
        down={144}
      />
    </div>
  );
};

export default CardsDashboardContainer;
