import { useQuery } from "@apollo/client";
import React from "react";
import { UserData } from "../../types";
import { GET_USER } from "../../queries";

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
      <h1 className="text-2xl font-bold">{bio}</h1>
    </div>
  );
};

export default UserProfile;
