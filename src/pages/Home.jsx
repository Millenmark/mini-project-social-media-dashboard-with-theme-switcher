import ThemeToggler from "../components/UI/ThemeToggler";
import { Dashboard, Overview } from "../components/containers";
import Heading from "../components/partials/Heading";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <Heading />
      <ThemeToggler />
      <Dashboard />
      <Overview />
    </div>
  );
};

export default Home;
