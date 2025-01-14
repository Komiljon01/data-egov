import { Box, Typography } from "@mui/material";
import { HeroTrendingDatasetTypes } from "../../types";
import "./HeroDatasetCard.css";

interface Props {
  dataset: HeroTrendingDatasetTypes;
}

function HeroDatasetCard({ dataset }: Props) {
  const { text, company, date, color } = dataset;

  return (
    <Box
      component="div"
      className="dataset-card"
      sx={{ borderLeftColor: `${color === "light" && "#306fdd80"}` }}
    >
      <Typography variant="h5">{text}</Typography>
      <Typography variant="body1">{company}</Typography>
      <Typography variant="subtitle1">Updated: {date}</Typography>
    </Box>
  );
}

export default HeroDatasetCard;
