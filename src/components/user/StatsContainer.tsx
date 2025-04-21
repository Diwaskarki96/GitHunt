import StatsCard from "./StatsCard";

type StatsContainerProps = {
  totalRepos: number;
  followers: number;
  following: number;
  gists: number;
};
const StatsContainer = ({
  totalRepos,
  followers,
  following,
  gists,
}: StatsContainerProps) => {
  return (
    <div className="grid grid-cols- md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
      <StatsCard title="Total Repositories" count={totalRepos} />
      <StatsCard title="Followers" count={followers} />
      <StatsCard title="Following" count={following} />
      <StatsCard title="Gists" count={gists} />
    </div>
  );
};

export default StatsContainer;
