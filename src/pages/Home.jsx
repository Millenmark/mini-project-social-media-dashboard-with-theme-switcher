import ThemeToggler from "../components/UI/ThemeToggler";
import CardDashboard from "../components/partials/CardDashboard";
import Heading from "../components/partials/Heading";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <Heading />
      <ThemeToggler />
      <CardDashboard />
    </div>
  );
};

export default Home;
