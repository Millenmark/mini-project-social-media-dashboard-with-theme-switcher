import CardDashboard from "../partials/CardDashboard";
import { socials } from "../../services/contents";

const Dashboard = () => {
  return (
    <div className="mt-12 flex flex-col gap-6">
      {socials.map((social, index) => {
        const { logo, username, followers, colorScheme, state } = social;

        return (
          <CardDashboard
            key={index}
            logo={logo}
            username={username}
            followers={followers}
            className={colorScheme}
            state={state}
          />
        );
      })}
    </div>
  );
};

export default Dashboard;
