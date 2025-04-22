import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { calculatePopularLanguages } from "../../utils";
import { Repository } from "../../types";

const UsedLanguages = ({ repositories }: { repositories: Repository[] }) => {
  const popularLanguages = calculatePopularLanguages(repositories);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Used Languages
      </h2>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={popularLanguages}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="language" tickLine={false} tickMargin={10} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#2563eb" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UsedLanguages;
