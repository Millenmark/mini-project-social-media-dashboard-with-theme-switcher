import ThemeToggler from "../components/UI/ThemeToggler";
import { CardsDashboardContainer } from "../components/containers";
import Heading from "../components/partials/Heading";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <Heading />
      <ThemeToggler />
      <CardsDashboardContainer />
    </div>
  );
};

export default Home;
