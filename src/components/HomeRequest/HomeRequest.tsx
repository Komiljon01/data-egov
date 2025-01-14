import { Box, Button, Typography } from "@mui/material";
import { HomeRequestTypes } from "../../types";
import "./HomeRequest.css";

interface Props {
  request: HomeRequestTypes;
}

function HomeRequest({ request }: Props) {
  const { text, reqNum } = request;

  return (
    <Box component="tr" className="home-request-item">
      <Box component="td">
        <Typography variant="body1" className="home-request-title">
          {text}
        </Typography>
      </Box>
      <Box component="td">
        <Typography variant="subtitle1" className="home-request-num">
          {reqNum}
        </Typography>
      </Box>
      <Box component="td" className="home-request-td-btn">
        <Button variant="contained" disableElevation>
          Vote
        </Button>
      </Box>
    </Box>
  );
}

export default HomeRequest;
