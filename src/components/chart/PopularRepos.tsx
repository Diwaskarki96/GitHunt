import { Repository } from "../../types";
import { calculateMostStarredRepos } from "../../utils";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PopularRepos = ({ repositories }: { repositories: Repository[] }) => {
  const popularRepos = calculateMostStarredRepos(repositories);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-center mb-4">Popular Repos</h2>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={popularRepos}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="repo"
              tickLine={false}
              tickMargin={10}
              tickFormatter={(value) => value.slice(0, 10)} // Truncate long names
            />
            <YAxis />
            <Tooltip
              formatter={(value: number, name: string) => [
                `${value} ⭐`,
                "Stars",
              ]}
              labelFormatter={(label) => `Repo: ${label}`}
            />
            <Bar dataKey="stars" fill="#e11c47" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PopularRepos;
