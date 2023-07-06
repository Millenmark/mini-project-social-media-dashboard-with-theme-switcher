import ThemeToggler from "../components/UI/ThemeToggler";
import { CardsDashboardContainer, Overview } from "../components/containers";
import Heading from "../components/partials/Heading";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <Heading />
      <ThemeToggler />
      <CardsDashboardContainer />
      <Overview />
    </div>
  );
};

export default Home;
