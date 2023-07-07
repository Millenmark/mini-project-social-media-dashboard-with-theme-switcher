import CardOverview from "../partials/CardOverview";
import { overviews } from "../../services/contents";

const Overview = () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-light-text dark:text-white-text mb-5">
        Overview - Today
      </h2>

      <div className="grid gap-7 mb-14 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {overviews.map((overview, index) => {
          const { title, number, logo, status } = overview;

          return (
            <CardOverview
              key={index}
              title={title}
              number={number}
              logo={logo}
              status={status}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Overview;
