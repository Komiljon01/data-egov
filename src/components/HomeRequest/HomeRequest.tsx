import { Box, Button, Typography } from "@mui/material";
import { HomeRequestTypes } from "../../types";
import "./HomeRequest.css";
import { useTranslation } from "react-i18next";

interface Props {
  request: HomeRequestTypes;
}

function HomeRequest({ request }: Props) {
  const { t } = useTranslation();
  const { text, reqNum } = request;

  return (
    <Box component="tr" className="home-request-item">
      <Box component="td">
        <Typography variant="body1" className="home-request-title">
          {t(text)}
        </Typography>
      </Box>
      <Box component="td">
        <Typography variant="subtitle1" className="home-request-num">
          {reqNum}
        </Typography>
      </Box>
      <Box component="td" className="home-request-td-btn">
        <Button variant="contained" disableElevation>
          {t("homeRequests.table.vote")}
        </Button>
      </Box>
    </Box>
  );
}

export default HomeRequest;
