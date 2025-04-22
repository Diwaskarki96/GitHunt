import { Repository } from "../../types";
import { calculateMostForkedRepos } from "../../utils";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ForkedRepos = ({ repositories }: { repositories: Repository[] }) => {
  const mostForkedRepos = calculateMostForkedRepos(repositories);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-center mb-4">Forked Repos</h2>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={mostForkedRepos}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="repo"
              tickLine
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 10)}
            />
            <YAxis />
            <Tooltip
              formatter={(value: number, name: string) => [
                `${value} 🍴`,
                "Forks",
              ]}
              labelFormatter={(label) => `Repo: ${label}`}
            />
            <Bar dataKey="count" fill="#facd12" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ForkedRepos;
