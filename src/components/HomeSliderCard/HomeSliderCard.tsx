import { Box, Card, Stack, Typography } from "@mui/material";
import { HomeNewsTypes } from "../../types";
import "./HomeSliderCard.css";

interface Props {
  news: HomeNewsTypes;
}

function HomeSliderCard({ news }: Props) {
  const { img, title, text, date } = news;

  return (
    <Card
      className="news-item"
      sx={{
        backgroundColor: "transparent",
        borderRadius: "10px",
        boxShadow: "none",
      }}
    >
      <Box component="img" src={img} alt={title} className="news-item-img" />

      <Box component="div" className="news-item-content">
        <Typography variant="h3" className="news-item-title">
          {title}
        </Typography>
        <Typography variant="body1" className="news-item-text">
          {text}
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body1" className="news-item-date">
            {date}
          </Typography>
          <Typography variant="body1" className="news-item-read-more">
            More details...
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
}

export default HomeSliderCard;
