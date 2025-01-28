import { Box, Typography } from "@mui/material";
import { HomeTrendingDatasetTypes } from "../../types";
import "./HomeDatasetCard.css";
import { useTranslation } from "react-i18next";

interface Props {
  dataset: HomeTrendingDatasetTypes;
}

function HomeDatasetCard({ dataset }: Props) {
  const { text, company, date, color } = dataset;
  const { t } = useTranslation();

  return (
    <Box
      component="div"
      className="dataset-card"
      sx={{ borderLeftColor: `${color === "light" && "#306fdd80"}` }}
    >
      <Typography variant="h5">{t(text)}</Typography>
      <Typography variant="body1">{t(company)}</Typography>
      <Typography variant="subtitle1">
        {t("homeDataset.cardDateTitle")}: {date}
      </Typography>
    </Box>
  );
}

export default HomeDatasetCard;
