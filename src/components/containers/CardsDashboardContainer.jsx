import CardDashboard from "../partials/CardDashboard";
import facebook from "../../assets/icon-facebook.svg";

const CardsDashboardContainer = () => {
  return (
    <div>
      <CardDashboard
        logo={"facebook"}
        username={"@makkudev"}
        followers={1233}
      />

      <CardDashboard logo={facebook} username={"@makkudev"} followers={1233} />

      <CardDashboard
        logo={"instagram"}
        username={"@makkudev"}
        followers={1233}
      />

      <CardDashboard
        logo={"youtube"}
        username={"@makkudev"}
        followers={1233}
        subs={true}
      />
    </div>
  );
};

export default CardsDashboardContainer;
