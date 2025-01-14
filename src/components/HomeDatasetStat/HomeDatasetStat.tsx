import { Box, Stack, Typography } from "@mui/material";
import { HomeDatasetStatsTypes } from "../../types";
import "./HomeDatasetStat.css";

interface Props {
  data: HomeDatasetStatsTypes;
}

function HomeDatasetStat({ data }: Props) {
  const { text, statNum, width, color } = data;
  return (
    <Box component="div" className={`home-dataset-stat ${color === "blue" && "active-stat"}`}>
      <Stack direction="row" justifyContent="space-between" gap="20px">
        <Typography variant="body1" className="home-dataset-stat-title">
          {text}
        </Typography>
        <Typography
          variant="subtitle1"
          className="home-dataset-stat-number"
          color={`${color === "red" ? "#b31d53" : "#3369c7"}`}
        >
          {statNum}
        </Typography>
      </Stack>

      <Box
        component="span"
        className="dataset-percent"
        bgcolor={`${color === "red" ? "#b31d53" : "#3369c7"}`}
        width={width}
      />
    </Box>
  );
}

export default HomeDatasetStat;
