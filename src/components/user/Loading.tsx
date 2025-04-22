import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const Loading = () => {
  return (
    <Box>
      {/* Large header skeleton */}
      <Skeleton
        variant="rectangular"
        height={194}
        sx={{
          width: "100%",
          "@media (min-width: 1024px)": { width: "50%" },
          mb: 4,
          borderRadius: 1,
        }}
      />

      {/* Flex container for smaller skeletons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "8px",
          mb: 4,
        }}
      >
        {/* Four skeleton items with responsive widths */}
        <Box
          sx={{
            width: { xs: "100%", lg: "calc(50% - 4px)", xl: "calc(25% - 6px)" },
          }}
        >
          <Skeleton
            variant="rectangular"
            height={70}
            sx={{ borderRadius: 1, width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", lg: "calc(50% - 4px)", xl: "calc(25% - 6px)" },
          }}
        >
          <Skeleton
            variant="rectangular"
            height={70}
            sx={{ borderRadius: 1, width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", lg: "calc(50% - 4px)", xl: "calc(25% - 6px)" },
          }}
        >
          <Skeleton
            variant="rectangular"
            height={70}
            sx={{ borderRadius: 1, width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", lg: "calc(50% - 4px)", xl: "calc(25% - 6px)" },
          }}
        >
          <Skeleton
            variant="rectangular"
            height={70}
            sx={{ borderRadius: 1, width: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Loading;
