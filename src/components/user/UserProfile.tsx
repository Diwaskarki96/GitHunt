import { useQuery } from "@apollo/client";
import { GET_USER } from "../../queries";
import { UserData } from "../../types";
import UserCard from "./UserCard";
import StatsContainer from "./StatsContainer";

type UserProfileProps = {
  userName: string;
};
const UserProfile = ({ userName }: UserProfileProps) => {
  const { data, loading, error } = useQuery<UserData>(GET_USER, {
    variables: { login: userName },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <h2 className="text-xl">Error: {error.message}</h2>;
  if (!data) return <h2 className="text-xl">No data found</h2>;
  const {
    avatarUrl,
    bio,
    followers,
    following,
    gists,
    name,
    repositories,
    url,
  } = data.user;
  return (
    <div>
      {/* <h1 className="text-2xl font-bold">{bio}</h1> */}
      <UserCard bio={bio} avatarUrl={avatarUrl} name={name} url={url} />
      <StatsContainer
        totalRepos={repositories.totalCount}
        followers={followers.totalCount}
        following={following.totalCount}
        gists={gists.totalCount}
      />
    </div>
  );
};

export default UserProfile;
