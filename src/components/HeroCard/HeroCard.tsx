import { Box, Card, CardContent, Typography } from "@mui/material";
import "./HeroCard.css";
import { HeroCardsTypes } from "../../types";
import { useTranslation } from "react-i18next";

interface Props {
  card: HeroCardsTypes;
}

function HeroCard({ card }: Props) {
  const { text, count, icon: image } = card;
  const { t } = useTranslation();

  return (
    <Card className="hero-card">
      <CardContent className="hero-card-content">
        <Typography component="span" className="hero-card-text">
          {t(text)}
        </Typography>
        <Typography component="span" className="hero-card-number">
          {count}
        </Typography>
        <Box
          className="hero-card-img"
          component="img"
          src={image as string}
          alt={`${text} image`}
        />
      </CardContent>
    </Card>
  );
}

export default HeroCard;
