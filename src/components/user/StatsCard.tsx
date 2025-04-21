import { Box } from "@mui/material";

type StatsCardProps = {
  title: string;
  count: number;
};
const StatsCard = ({ title, count }: StatsCardProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "6px",
        mt: "20px",
        gap: "10px",
      }}
    >
      <Box sx={{ fontSize: "16px", fontWeight: "bold" }}>{title}</Box>
      <Box sx={{ fontSize: "16px", color: "grey" }}>{count}</Box>
    </Box>
  );
};

export default StatsCard;
