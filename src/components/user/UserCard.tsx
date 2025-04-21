import { Box, Button, Typography } from "@mui/material";

type UserCardProps = {
  avatarUrl: string;
  name: string;
  bio: string;
  url: string;
};
const UserCard = ({ avatarUrl, name, bio, url }: UserCardProps) => {
  return (
    <Box className="w-full lg:w-1/2 flex gap-8 p-[1rem] mt-8">
      <Box className="">
        <img src={avatarUrl} alt="Profile Photo" className="w-36 h-36" />
      </Box>
      <Box
        sx={{
          gap: "0.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: "700" }}>{name}</Typography>
        </Box>
        <Box>
          <Typography sx={{ color: "grey" }}>{bio}</Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: "black",
            fontSize: "12px",
            width: "70%",
            padding: "0.5rem",
          }}
        >
          <a href={url} target="_blank">
            <Typography sx={{ fontSize: "11px", fontWeight: "bold" }}>
              Follow
            </Typography>
          </a>
        </Button>
      </Box>
    </Box>
  );
};

export default UserCard;
